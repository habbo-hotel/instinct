import {Module} from '@nestjs/common';
import {UpdateController} from './update.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UpdateController],
})
export class UpdateModule {}
