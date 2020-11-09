import {Module} from '@nestjs/common';
import {SessionModule} from './session/session.module';
import {FeatureModule} from './feature/feature.module';
import {DatabaseModule} from './database/database.module';
import {BusinessModule} from './business/business.module';

@Module({
  imports: [DatabaseModule, BusinessModule, SessionModule, FeatureModule],
  exports: [DatabaseModule, BusinessModule, SessionModule, FeatureModule],
})
export class InstinctRPModule {}
