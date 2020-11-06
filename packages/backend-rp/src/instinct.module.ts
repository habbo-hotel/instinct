import {Module} from '@nestjs/common';
import {DatabaseModule} from './database';
import {BusinessModule} from './business/business.module';

@Module({
  imports: [DatabaseModule, BusinessModule],
  exports: [DatabaseModule, BusinessModule],
})
export class InstinctRPModule {}
