import {Module} from '@nestjs/common';
import {BusinessPipe} from './business.pipe';
import {BusinessJobPipe} from './job.pipe';
import {BusinessService} from './business.service';
import {BusinessController} from './business.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BusinessController],
  providers: [BusinessJobPipe, BusinessPipe, BusinessService],
  exports: [BusinessJobPipe, BusinessPipe, BusinessService],
})
export class BusinessModule {}
