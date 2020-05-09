import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {BusinessPipe} from './business.pipe';
import {BusinessService} from './business.service';
import {BusinessController} from './business.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [BusinessController],
  providers: [BusinessPipe, BusinessService],
  exports: [BusinessPipe, BusinessService],
})
export class BusinessModule {}
