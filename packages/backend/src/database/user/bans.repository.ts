import {Injectable} from '@nestjs/common';
import {UserBanEntity} from './bans.entity';
import {BaseRepository} from '../base.repository';

@Injectable()
export class UserBanRepository extends BaseRepository<UserBanEntity> {
  constructor() {
    super(UserBanEntity, ['user', 'staffMember']);
  }
}
