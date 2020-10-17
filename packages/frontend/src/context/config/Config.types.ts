import {Config, defaultConfig} from '@instinct/interface';

export interface ConfigContext {
  config: Config;
  setConfig(changes: Partial<Config>): void;
}

export const defaultConfigInterface: ConfigContext = {
  config: defaultConfig,
  setConfig(changes: Partial<Config>) {},
};
