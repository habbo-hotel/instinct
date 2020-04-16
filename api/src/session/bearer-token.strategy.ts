import { jwtSecret } from '../config';
import { Injectable } from '@nestjs/common';
import { User } from 'fashionkilla-interfaces';
import { UserService } from '../user/user.service';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity, userWire } from '../database/entity/user';

@Injectable()
export class BearerTokenStrategy extends PassportStrategy(Strategy, 'bearer-token') {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate({ userID }: Record<'userID', number>): Promise<User> {
    const user: UserEntity = await this.userService.getByID(userID);
    return userWire(user);
  }
}
