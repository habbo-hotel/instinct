import * as Moment from 'moment';
import {UserService} from '../../user';
import {HashService} from '../../common';
import * as randomString from 'crypto-random-string';
import {EmailService} from '../../email/email.service';
import {UserEntity} from '../../database/entity/user';
import {BadRequestException, Injectable} from '@nestjs/common';
import {ForgotPasswordEmailTemplate} from './forgot-password.types';
import {sendGridForgotPasswordTemplate, websiteLink} from '../../config/environment';
import {UserForgotPasswordRepository} from '../../database/entity/user/forgot-password.repository';

@Injectable()
export class ForgotPasswordService {
  constructor(
    private readonly userService: UserService,
    private readonly hashService: HashService,
    private readonly emailService: EmailService,
    private readonly forgotPasswordRepo: UserForgotPasswordRepository
  ) {}

  async generatePasswordKey(email: string): Promise<void> {
    const user: UserEntity | undefined = await this.userService.getByEmail(email);

    if (user === undefined) {
      throw new BadRequestException('User does not exist');
    }

    const token = randomString({length: 50, type: 'url-safe'});
    const expiration = Moment().add('4', 'hours').unix();
    await this.forgotPasswordRepo.create(user!.id!, token, expiration);

    await this.emailService.sendEmail<ForgotPasswordEmailTemplate>(user.email, sendGridForgotPasswordTemplate, {
      username: user.username,
      reset_link: `${websiteLink}/forgot-password?token=${token}`,
    });
  }

  async redeemPasswordToken(token: string, newPassword: string): Promise<void> {
    const forgotPasswordEntity = await this.forgotPasswordRepo.getByToken(token);

    const currentTimestamp = +new Date() / 1000;

    if (forgotPasswordEntity.expiresAt <= currentTimestamp) {
      throw new BadRequestException('Reset link has expired');
    }

    await this.userService.updateByID(forgotPasswordEntity.userID, {
      password: this.hashService.generate(newPassword),
    });

    await this.forgotPasswordRepo.deleteByToken(token);
  }
}
