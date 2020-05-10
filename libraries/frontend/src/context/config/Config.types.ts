import { Config, defaultConfig } from 'instinct-interfaces';

export interface ConfigTypes extends Config {
  setStore?: (changes: Partial<ConfigTypes>) => void;
}

export const defaultConfigInterface: ConfigTypes = defaultConfig;
