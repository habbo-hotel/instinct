import {Module} from '@nestjs/common';
import {UpdatePipe} from './update.pipe';
import {UpdateController} from './update.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UpdateController],
  providers: [UpdatePipe],
  exports: [UpdatePipe],
})
export class UpdateModule {}
