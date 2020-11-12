import {Module} from '@nestjs/common';
import {SessionModule} from '../session/session.module';
import {DatabaseModule} from '../database/database.module';
import {EmulatorSettingsController} from './emulator-settings.controller';

@Module({
  imports: [DatabaseModule, SessionModule],
  controllers: [EmulatorSettingsController],
})
export class EmulatorModule {}
