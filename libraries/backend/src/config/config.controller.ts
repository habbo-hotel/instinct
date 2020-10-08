import {Config} from 'instinct-interfaces';
import {Controller, Get} from '@nestjs/common';
import {ConfigRepository} from '../database/entity/config/config.repository';

@Controller('config')
export class ConfigController {
  constructor(private readonly configRepo: ConfigRepository) {}

  @Get()
  getConfig(): Promise<Config> {
    return this.configRepo.getConfig();
  }
}
