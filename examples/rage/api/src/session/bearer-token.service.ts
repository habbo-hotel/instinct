import * as JWT from 'jsonwebtoken';
import {Injectable} from '@nestjs/common';
import {authJwtExpires, authJwtSecret} from '../common/config';

@Injectable()
export class BearerTokenService {
  signToken(userID: number): string {
    return JWT.sign({userID}, authJwtSecret, {
      expiresIn: authJwtExpires,
    });
  }
}
