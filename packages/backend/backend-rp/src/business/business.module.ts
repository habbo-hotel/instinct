import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {BusinessPipe} from './business.pipe';
import {BusinessController} from './business.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [BusinessController],
  providers: [BusinessPipe],
  exports: [BusinessPipe],
})
export class BusinessModule {}
