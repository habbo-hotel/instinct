import {Module} from '@nestjs/common';
import {GangModule} from './gang/gang.module';
import {SessionModule} from './session/session.module';
import {FeatureModule} from './feature/feature.module';
import {DatabaseModule} from './database/database.module';
import {BusinessModule} from './business/business.module';

@Module({
  imports: [
    DatabaseModule,
    BusinessModule,
    GangModule,
    SessionModule,
    FeatureModule,
  ],
  exports: [
    DatabaseModule,
    BusinessModule,
    GangModule,
    SessionModule,
    FeatureModule,
  ],
})
export class InstinctRPModule {}
