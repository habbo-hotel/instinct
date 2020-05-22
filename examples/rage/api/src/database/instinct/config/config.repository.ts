import { ConfigEntity } from './config.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ConfigEntity)
export class ConfigRepository extends Repository<ConfigEntity> {

  getConfig(): Promise<ConfigEntity> {
    return this.findOneOrFail();
  }

}