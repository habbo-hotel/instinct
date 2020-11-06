import {Injectable} from '@nestjs/common';
import {ConfigEntity} from './config.entity';
import {BaseRepository} from '../base.repository';

@Injectable()
export class ConfigRepository extends BaseRepository<ConfigEntity> {
  constructor() {
    super(ConfigEntity, []);
  }

  getConfig(): Promise<ConfigEntity> {
    return this.findOneOrFail({});
  }
}
