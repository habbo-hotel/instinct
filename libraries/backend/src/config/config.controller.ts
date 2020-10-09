import {Config} from 'instinct-interfaces';
import {Controller, Get} from '@nestjs/common';
import {configWire} from '../database/entity/config/config.wire';
import {ConfigRepository} from '../database/entity/config/config.repository';

@Controller('config')
export class ConfigController {
  constructor(private readonly configRepo: ConfigRepository) {}

  @Get()
  async getConfig(): Promise<Config> {
    const config = await this.configRepo.getConfig();
    return configWire(config);
  }
}
