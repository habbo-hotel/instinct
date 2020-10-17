import {Config, defaultConfig} from '@instinct/interface';

export interface GameSWFsState {
  config: Config;
  showError: boolean;
  showSpinner: boolean;
  showConfirmation: boolean;
}

export const defaultGameSWFsState: GameSWFsState = {
  config: defaultConfig,
  showError: false,
  showSpinner: false,
  showConfirmation: false,
}
