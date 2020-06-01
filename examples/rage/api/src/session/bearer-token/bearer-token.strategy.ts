import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {BackendUserSession} from '../session/session.type';
import {authJwtIssuer, authJwtSecret} from '../../common/config';
import {UserSessionRepository} from '../../database/rage/user/user-session/user-session.repository';

@Injectable()
export class BearerTokenStrategy extends PassportStrategy(Strategy, 'bearer-token') {

  constructor(private readonly userSessionRepo: UserSessionRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      issuer: authJwtIssuer,
      ignoreExpiration: false,
      secretOrKey: authJwtSecret,
    });
  }

  validate({sessionID}: Record<'sessionID', number>): Promise<BackendUserSession> {
    return this.userSessionRepo.findOneByIDOrFail(sessionID) as Promise<BackendUserSession>;
  }
}
