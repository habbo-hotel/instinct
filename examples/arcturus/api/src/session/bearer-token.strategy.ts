import { jwtSecret } from '../config';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from '../database/entity/user';

@Injectable()
export class BearerTokenStrategy extends PassportStrategy(Strategy, 'bearer-token') {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate({ userID }: Record<'userID', number>): Promise<UserEntity> {
    return this.userService.getByID(userID);
  }
}
