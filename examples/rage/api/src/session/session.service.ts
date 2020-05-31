import {HashService} from '../common/hash.service';
import {BearerTokenService} from './bearer-token.service';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';
import {UserTwoFactorAuthRepository} from '../database/rage/user/user-two-factor-auth/user-two-factor-auth.repository';

@Injectable()
export class SessionService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly hashService: HashService,
    private readonly bearerTokenService: BearerTokenService,
    private readonly userTwoFactorAuthRepo: UserTwoFactorAuthRepository,
  ) {}

  async loginWithCredentials(username: string, password: string): Promise<string> {
    const user: UserEntity | undefined = await this.userRepo.findOneByUsername(username);

    if (user === undefined) {
      throw new UnauthorizedException({
        type: 'auth',
        data: 'invalid_username',
      });
    }

    const samePassword: boolean = await this.hashService.compare(password, user.password);

    if (!samePassword) {
      throw new UnauthorizedException({
        type: 'auth',
        data: 'invalid_password',
      });
    }

    if (user.twoFactorAuthentication === 1) {
      const oneTimeCode: string = await this.userTwoFactorAuthRepo.generateKeyForUser(user.id!);

      throw new UnauthorizedException({
        type: 'two_factor',
        data: oneTimeCode,
      })
    }

    return this.bearerTokenService.signToken(user.id!);
  }
}
