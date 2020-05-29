import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ConfigEntity} from './config.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ConfigRepository {

  constructor(@InjectRepository(ConfigEntity) private readonly configRepo: Repository<ConfigEntity>) { }

  getConfig(): Promise<ConfigEntity> {
    return this.configRepo.findOneOrFail();
  }

  async updateConfig(changes: Partial<ConfigEntity>): Promise<ConfigEntity> {
    const config: ConfigEntity = await this.getConfig();

    await this.configRepo.update(config.id, changes);

    return this.getConfig();
  }

}
