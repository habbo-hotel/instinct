import { Config, defaultConfig } from 'instinct-interfaces';

export interface ConfigContext {
  config: Config;
  setConfig(changes: Partial<Config>): void;
}

export const defaultConfigInterface: ConfigContext = {
  config: defaultConfig,
  setConfig(changes: Partial<Config>) {},
};
