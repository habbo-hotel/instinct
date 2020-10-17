import {ConfigService} from './';
import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {Config, Health} from '@instinct/interface';

class ConfigServiceImplementation implements ConfigService {
  async getConfig(): Promise<Config> {
    const config: AxiosResponse<Config> = await backendAPI.get('config');
    return config.data;
  }

  async updateConfig(config: Config): Promise<void> {
    await backendAPI.post('config', config);
  }

  async getHealth(): Promise<Health> {
    const health: AxiosResponse<Health> = await backendAPI.get('health');
    return health.data;
  }
}

export const configService: ConfigService = new ConfigServiceImplementation();
