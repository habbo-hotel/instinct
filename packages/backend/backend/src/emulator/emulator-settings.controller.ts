import {Controller, Get} from '@nestjs/common';
import {HasSession} from '../session/has-session.decorator';
import {emulatorSettingsWire} from '../database/emulator/emulator-settings.wire';
import {EmulatorSettingsRepository} from '../database/emulator/emulator-settings.repository';

@Controller('emulator/settings')
export class EmulatorSettingsController {
  constructor(
    private readonly emulatorSettingsRepo: EmulatorSettingsRepository
  ) {}

  @Get()
  @HasSession()
  async getSettings() {
    const settings = await this.emulatorSettingsRepo.find();
    return emulatorSettingsWire(settings);
  }
}
