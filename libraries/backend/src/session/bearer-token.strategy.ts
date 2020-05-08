import {ConfigService} from '../config';
import {UserService} from '../user';
import {Injectable} from '@nestjs/common';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {UserEntity} from '../database/entity/user';

@Injectable()
export class BearerTokenStrategy extends PassportStrategy(Strategy, 'bearer-token') {
  constructor(private readonly userService: UserService, private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwtSecret'),
    });
  }

  async validate({userID}: Record<'userID', number>): Promise<UserEntity> {
    return this.userService.getByID(userID);
  }
}
