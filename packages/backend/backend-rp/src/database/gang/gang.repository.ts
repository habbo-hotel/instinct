import {Repository} from 'typeorm';
import {GangEntity} from './gang.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '@instinct-prj/backend';

@Injectable()
export class GangRepository extends BaseRepository<GangEntity> {
  constructor(@InjectRepository(GangEntity) gangRepo: Repository<GangEntity>) {
    super(gangRepo, ['user', 'ranks', 'ranks.users', 'ranks.users.user']);
  }
}
