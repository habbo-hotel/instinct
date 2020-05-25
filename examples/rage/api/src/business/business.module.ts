import {Module} from '@nestjs/common';
import {BusinessJobPipe} from './job.pipe';
import {BusinessPipe} from './business.pipe';
import {BusinessController} from './business.controller';
import { BusinessJobController } from './job.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BusinessJobController, BusinessController],
  providers: [BusinessJobPipe, BusinessPipe],
  exports: [BusinessJobPipe, BusinessPipe],
})
export class BusinessModule {}
