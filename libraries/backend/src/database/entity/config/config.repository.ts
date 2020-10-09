import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ConfigEntity} from './config.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ConfigRepository {
  constructor(@InjectRepository(ConfigEntity) private readonly configRepo: Repository<ConfigEntity>) {}

  async getConfig(): Promise<ConfigEntity> {
    try {
      return await this.configRepo.findOneOrFail();
    } catch {
      throw new Error('Missing Configuration');
    }
  }
}
