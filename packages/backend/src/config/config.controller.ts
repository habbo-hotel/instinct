import {Config} from '@instinct/interface';
import {UpdateConfigDTO} from './config.dto';
import {Body, Controller, Get, Post} from '@nestjs/common';
import {HasScope} from '../session/permission-scope.decorator';
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

  @Post()
  @HasScope('websiteManageConfig')
  async updateConfig(@Body() configDTO: UpdateConfigDTO): Promise<Config> {
    const config = await this.configRepo.updateConfig(configDTO);
    return configWire(config);
  }
}
