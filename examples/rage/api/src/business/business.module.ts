import {Module} from '@nestjs/common';
import {BusinessPipe} from './business.pipe';
import {BusinessController} from './business.controller';
import {DatabaseModule} from '../database/database.module';
import {BusinessPositionPipe} from './business-position.pipe';
import {BusinessPositionController} from './business-position.controller';
import {BusinessJobApplicationPipe} from './business-job-application,pipe';

@Module({
  imports: [DatabaseModule],
  controllers: [BusinessPositionController, BusinessController],
  providers: [BusinessJobApplicationPipe, BusinessPositionPipe, BusinessPipe],
  exports: [BusinessJobApplicationPipe, BusinessPositionPipe, BusinessPipe],
})
export class BusinessModule {}
