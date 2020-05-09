import { Config } from 'instinct-rp-interfaces';
import { Controller, Get } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigEntity, configWire } from '../database/entity/config';

@Controller('config')
export class ConfigController {

  constructor(private readonly configService: ConfigService) {}

  @Get()
  async getConfiguration(): Promise<Config> {
    const config: ConfigEntity = await this.configService.getConfig();
    return configWire(config);
  }

}