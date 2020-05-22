import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {BusinessPipe} from './business.pipe';
import { BusinessJobPipe } from './job.pipe';
import {BusinessService} from './business.service';
import {BusinessController} from './business.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [BusinessController],
  providers: [BusinessJobPipe, BusinessPipe, BusinessService],
  exports: [BusinessJobPipe, BusinessPipe, BusinessService],
})
export class BusinessModule {}
