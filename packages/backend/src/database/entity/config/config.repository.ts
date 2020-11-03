import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {ConfigEntity} from './config.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class ConfigRepository {
  constructor(
    @InjectRepository(ConfigEntity)
    private readonly configRepo: Repository<ConfigEntity>
  ) {}

  getConfig(): Promise<ConfigEntity> {
    return this.configRepo.findOneOrFail();
  }

  async updateConfig(
    configChanges: Partial<ConfigEntity>
  ): Promise<ConfigEntity> {
    const config = await this.getConfig();
    return this.configRepo.save({
      id: config.id!,
      ...configChanges,
    });
  }
}
