import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserRPStatEntity} from './rp-stats.entity';
import {BaseRepository} from '@instinct-prj/backend/src/database/base.repository';

@Injectable()
export class UserRPStatRepository extends BaseRepository<UserRPStatEntity> {
  constructor(
    @InjectRepository(UserRPStatEntity)
    userRPStatRepo: Repository<UserRPStatEntity>
  ) {
    super(userRPStatRepo, ['user']);
  }
}
