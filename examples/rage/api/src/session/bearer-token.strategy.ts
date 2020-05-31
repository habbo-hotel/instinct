import {Injectable} from '@nestjs/common';
import {authJwtSecret} from '../common/config';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';

@Injectable()
export class BearerTokenStrategy extends PassportStrategy(Strategy, 'bearer-token') {

  constructor(private readonly userRepo: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authJwtSecret,
    });
  }

  validate({userID}: Record<'userID', number>): Promise<UserEntity> {
    return this.userRepo.findOneByIDOrFail(userID);
  }
}
