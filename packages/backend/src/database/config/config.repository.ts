import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ConfigEntity} from './config.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '../base.repository';

@Injectable()
export class ConfigRepository extends BaseRepository<ConfigEntity> {
  constructor(
    @InjectRepository(ConfigEntity) configRepo: Repository<ConfigEntity>
  ) {
    super(configRepo, []);
  }

  getConfig(): Promise<ConfigEntity> {
    return this.findOneOrFail({});
  }
}
