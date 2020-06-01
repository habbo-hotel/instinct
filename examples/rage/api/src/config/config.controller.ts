import {ConfigDTO} from './config.dto';
import {AUTH_SCOPE} from '../auth/auth.types';
import {Config} from 'instinct-rp-interfaces';
import {HasScope} from '../auth/auth.decorator';
import {Body, Controller, Get, Patch} from '@nestjs/common';
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

  @Patch()
  @HasScope(AUTH_SCOPE.ROOT)
  async updateConfiguration(@Body() configDTO: ConfigDTO): Promise<Config> {
    const updatedConfig: ConfigEntity = await this.configRepo.updateConfig(configDTO);

    return configWire(updatedConfig);
  }

}
