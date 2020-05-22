import * as JWT from 'jsonwebtoken';
import {Injectable} from '@nestjs/common';
import {jwtExpires, jwtSecret} from '../common/config';

@Injectable()
export class BearerTokenService {
  signToken(userID: number): string {
    return JWT.sign({userID}, jwtSecret, {
      expiresIn: jwtExpires,
    });
  }
}
