import {Config, defaultConfig} from 'instinct-interfaces';

export interface SitePreferencesState {
  config: Config;
  showError: boolean;
  showSpinner: boolean;
  showConfirmation: boolean;
}

export const defaultSitePreferencesState: SitePreferencesState = {
  config: defaultConfig,
  showError: false,
  showSpinner: false,
  showConfirmation: false,
}