import {Config, Health} from '@instinct/interface';

export interface ConfigService {
  getConfig(): Promise<Config>;
  updateConfig(config: Config): Promise<void>;
  getHealth(): Promise<Health>;
}
