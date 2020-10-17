import {Config, defaultConfig} from '@instinct/interface';

export interface WebsiteSettingsContextState {
  config: Config;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultWebsiteSettingsContextState: WebsiteSettingsContextState = {
  config: defaultConfig,
  showError: false,
  showSpinner: false,
};

export interface WebsiteSettingsContext extends WebsiteSettingsContextState {
  setConfig(changes: Partial<Config>): void;
  saveChanges(): Promise<void>;
}

export const defaultWebsiteSettingsContext: WebsiteSettingsContext = {
  ...defaultWebsiteSettingsContextState,
  setConfig(changes: Partial<Config>) {},
  saveChanges() {
    return Promise.resolve();
  },
};
