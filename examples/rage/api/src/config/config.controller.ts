import {Config} from 'instinct-rp-interfaces';
import {Controller, Get} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ConfigEntity, ConfigRepository, configWire} from '../database/instinct/config';

@Controller('config')
export class ConfigController {
  constructor(@InjectRepository(ConfigRepository) private readonly configRepo: ConfigRepository) {}

  @Get()
  async getConfiguration(): Promise<Config> {
    const config: ConfigEntity = await this.configRepo.getConfig();
    return configWire(config);
  }
}
