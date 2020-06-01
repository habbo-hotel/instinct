import { authenticator } from 'otplib';
import {Injectable} from '@nestjs/common';
import {authMfaSecret, authMfaService} from './config';
import {UserEntity} from '../database/rage/user/user/user.entity';

@Injectable()
export class OneTimeCodeService {

  generateOneTimeCode(instanceSecret: string): string {
    return authenticator.generate(this.getSecret(instanceSecret));
  }

  validateOneTimeCode(oneTimeCode: string, instanceSecret: string): boolean {
    return authenticator.check(oneTimeCode, this.getSecret(instanceSecret));
  }

  getAuthenticatorQRCode(user: UserEntity): string {
    if (user.twoFactorSecret === undefined) {
      throw new Error(`User ${user.id!} is missing two factor secret.  Cannot generate`);
    }
    return authenticator.keyuri(user.username, authMfaService, this.getSecret(user.twoFactorSecret!));
  }

  private getSecret(instanceSecret: string): string {
    return `${authMfaSecret}_${instanceSecret}`;
  }

}