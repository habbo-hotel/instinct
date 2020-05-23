import {Config} from 'instinct-rp-interfaces';
import {Controller, Get} from '@nestjs/common';
import {configWire} from '../database/instinct/config/config.wire';
import {ConfigEntity} from '../database/instinct/config/config.entity';
import {ConfigRepository} from '../database/instinct/config/config.repository';

@Controller('config')
export class ConfigController {
  constructor(private readonly configRepo: ConfigRepository) {}

  @Get()
  async getConfiguration(): Promise<Config> {
    const config: ConfigEntity = await this.configRepo.getConfig();
    return configWire(config);
  }
}
