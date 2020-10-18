import {ConfigDTO, exampleConfigDTO} from '@instinct/interface';

export interface WebsiteSettingsContextState {
  config: ConfigDTO;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultWebsiteSettingsContextState: WebsiteSettingsContextState = {
  config: exampleConfigDTO,
  showError: false,
  showSpinner: false,
};

export interface WebsiteSettingsContext extends WebsiteSettingsContextState {
  setConfig(changes: Partial<ConfigDTO>): void;
  saveChanges(): Promise<void>;
}

export const defaultWebsiteSettingsContext: WebsiteSettingsContext = {
  ...defaultWebsiteSettingsContextState,
  setConfig(changes: Partial<ConfigDTO>) {},
  saveChanges() {
    return Promise.resolve();
  },
};
