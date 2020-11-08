import {Module} from '@nestjs/common';
import {SessionModule} from './session';
import {DatabaseModule} from './database';
import {BusinessModule} from './business/business.module';

@Module({
  imports: [DatabaseModule, BusinessModule, SessionModule],
  exports: [DatabaseModule, BusinessModule, SessionModule],
})
export class InstinctRPModule {}
