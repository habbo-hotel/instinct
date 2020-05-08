import * as JWT from 'jsonwebtoken';
import {ConfigService} from '../config';
import {Injectable} from '@nestjs/common';

@Injectable()
export class BearerTokenService {
  constructor(private readonly configService: ConfigService) {}

  signToken(userID: number): string {
    return JWT.sign({userID}, this.configService.get('jwtSecret'), {
      expiresIn: this.configService.get('jwtExpires'),
    });
  }
}
