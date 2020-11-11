import {Module} from '@nestjs/common';
import {GangController} from './gang.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [GangController],
})
export class GangModule {}
