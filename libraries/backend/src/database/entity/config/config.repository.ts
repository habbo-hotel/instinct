import {Repository} from 'typeorm';
import {configWire} from './config.wire';
import {Injectable} from '@nestjs/common';
import {Config} from 'instinct-interfaces';
import {ConfigEntity} from './config.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ConfigRepository {
  constructor(@InjectRepository(ConfigEntity) private readonly configRepo: Repository<ConfigEntity>) {}

  async getConfig(): Promise<Config> {
    try {
      const config = await this.configRepo.findOneOrFail();
      return configWire(config);
    } catch {
      throw new Error('Missing Configuration');
    }
  }
}
