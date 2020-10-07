import { Config, defaultConfig } from 'instinct-interfaces';

export interface ConfigContext extends Config {
  setStore?: (changes: Partial<ConfigContext>) => void;
}

export const defaultConfigInterface: ConfigContext = defaultConfig;
