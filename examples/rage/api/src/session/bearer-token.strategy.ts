import {Injectable} from '@nestjs/common';
import {jwtSecret} from '../common/config';
import {InjectRepository} from '@nestjs/typeorm';
import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';

@Injectable()
export class BearerTokenStrategy extends PassportStrategy(Strategy, 'bearer-token') {
  constructor(@InjectRepository(UserRepository) private readonly userRepo: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate({userID}: Record<'userID', number>): Promise<UserEntity> {
    return this.userRepo.findOneByIDOrFail(userID);
  }
}
