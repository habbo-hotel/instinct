import * as JWT from 'jsonwebtoken';
import {Injectable} from '@nestjs/common';
import {authJwtExpires, authJwtIssuer, authJwtSecret} from '../../common/config';

@Injectable()
export class BearerTokenService {
  signToken(sessionID: number): string {
    return JWT.sign({sessionID}, authJwtSecret, {
      expiresIn: authJwtExpires,
      issuer: authJwtIssuer,
    });
  }
}
