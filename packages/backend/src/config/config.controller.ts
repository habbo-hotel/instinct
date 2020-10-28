import {UpdateConfigDTO} from './config.dto';
import {Config, ConfigDTO} from '@instinct-prj/interface';
import {Body, Controller, Get, Post} from '@nestjs/common';
import {HasScope} from '../session/permission-scope.decorator';
import {ConfigRepository} from '../database/entity/config/config.repository';
import {configDTOWire, configWire} from '../database/entity/config/config.wire';

@Controller('config')
export class ConfigController {
  constructor(private readonly configRepo: ConfigRepository) {}

  @Get()
  async getConfig(): Promise<Config> {
    const config = await this.configRepo.getConfig();
    return configWire(config);
  }

  @Get('full')
  @HasScope('websiteManageConfig')
  async getFullConfig(): Promise<ConfigDTO> {
    const config = await this.configRepo.getConfig();
    return configDTOWire(config);
  }

  @Post()
  @HasScope('websiteManageConfig')
  async updateConfig(@Body() configDTO: UpdateConfigDTO): Promise<Config> {
    const config = await this.configRepo.updateConfig({
      ...configDTO,
      websocketEnabled: configDTO.websocketEnabled ? 1 : 0,
    });
    return configWire(config);
  }
}
