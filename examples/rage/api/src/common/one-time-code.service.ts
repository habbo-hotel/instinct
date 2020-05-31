import { authenticator } from 'otplib';
import {Injectable} from '@nestjs/common';
import {authMfaSecret, authMfaService} from './config';
import {UserEntity} from '../database/rage/user/user/user.entity';

@Injectable()
export class OneTimeCodeService {

  generateOneTimeCode(): string {
    return authenticator.generate(authMfaSecret);
  }

  validateOneTimeCode(oneTimeCode: string): boolean {
    return authenticator.check(oneTimeCode, authMfaSecret);
  }

  getAuthenticatorQRCode(user: UserEntity): string {
    return authenticator.keyuri(user.username, authMfaService, authMfaSecret);
  }

}