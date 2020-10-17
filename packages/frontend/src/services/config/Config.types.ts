import {Config, Health} from '@instinct/interface';

export interface ConfigService {
  getConfig(): Promise<Config>;
  getHealth(): Promise<Health>;
}
