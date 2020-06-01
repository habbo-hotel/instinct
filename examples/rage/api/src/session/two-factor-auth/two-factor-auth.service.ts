import * as QRCode from 'qrcode';
import {Injectable} from '@nestjs/common';
import {BackendUserSession} from '../session/session.type';
import {UserEntity} from '../../database/rage/user/user/user.entity';
import {OneTimeCodeService} from '../../common/one-time-code.service';
import {UserSessionRepository} from '../../database/rage/user/user-session/user-session.repository';

@Injectable()
export class TwoFactorAuthService {

  constructor(
    private readonly oneTimeCodeService: OneTimeCodeService,
    private readonly userSessionRepo: UserSessionRepository,
  ) { }

  async confirmIdentity(session: BackendUserSession, oneTimeCode: string): Promise<boolean> {
    const confirmedOneTimeCode: string = this.generateOneTimeCodeForUser(session.user);

    if (oneTimeCode === confirmedOneTimeCode) {
      await this.userSessionRepo.updateOneByIDOrFail(session.id!, { authorized: 1 });
      return true;
    }

    return false;
  }

  async getQrCodeForUser(user: UserEntity): Promise<string> {
    return new Promise((resolve, reject) => {
      const code: string = this.oneTimeCodeService.getAuthenticatorQRCode(user);

      resolve(code);

      // QRCode.toDataURL(code, (error: Error, url: string) => {
      //
      //   if (error !== null) {
      //     reject(error);
      //   }
      //
      //   resolve(url);
      // });

    });
  }

  generateOneTimeCodeForUser(user: UserEntity): string {
    if (user.twoFactorSecret === undefined) {
      throw new Error(`User ${user.id!} is missing two factor secret.  Cannot generate`);
    }

    return this.oneTimeCodeService.generateOneTimeCode(user.twoFactorSecret);
  }

}