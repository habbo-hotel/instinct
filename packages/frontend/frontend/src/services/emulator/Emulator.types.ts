import {EmulatorSettings, EmulatorSettingsDTO} from '@instinct-prj/interface';

export interface EmulatorService {
  getSettings(): Promise<EmulatorSettings>;
  updateSettings(
    changes: Partial<EmulatorSettingsDTO>
  ): Promise<EmulatorSettings>;
}
