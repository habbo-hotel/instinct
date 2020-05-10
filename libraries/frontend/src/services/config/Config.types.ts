import { Config, Health } from 'instinct-interfaces';

export interface ConfigService {
  getConfig(): Promise<Config>;
  getHealth(): Promise<Health>;
}
