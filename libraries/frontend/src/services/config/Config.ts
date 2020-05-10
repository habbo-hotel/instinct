import { backendAPI } from 'api';
import { ConfigService } from './';
import { AxiosResponse } from 'axios';
import { Config, Health } from 'instinct-interfaces';

class ConfigServiceImplementation implements ConfigService {
  async getConfig(): Promise<Config> {
    const config: AxiosResponse<Config> = await backendAPI.get('config');
    return config.data;
  }

  async getHealth(): Promise<Health> {
    const health: AxiosResponse<Health> = await backendAPI.get('health');
    return health.data;
  }
}

export const configService: ConfigService = new ConfigServiceImplementation();
