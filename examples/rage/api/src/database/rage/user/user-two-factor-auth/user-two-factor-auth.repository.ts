import { Repository } from 'typeorm';
import {Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {UserTwoFactorAuthEntity} from './user-two-factor-auth.entity';
import {OneTimeCodeService} from '../../../../common/one-time-code.service';

@Injectable()
export class UserTwoFactorAuthRepository {

  constructor(
    private readonly oneTimeCodeService: OneTimeCodeService,
    @InjectRepository(UserTwoFactorAuthEntity)
    private readonly userTwoFactorAuthEntity: Repository<UserTwoFactorAuthEntity>,) { }

  async generateKeyForUser(userID: number): Promise<string> {
    const oneTimeCode: string = this.oneTimeCodeService.generateOneTimeCode();

    await this.userTwoFactorAuthEntity.save({
      userID,
      oneTimeCode,
    });

    return oneTimeCode;
  }

  async removeKeyForUser(userID: number, oneTimeCode: string): Promise<void> {
    await this.userTwoFactorAuthEntity.delete({ userID, oneTimeCode });
  }

}