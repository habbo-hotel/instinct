import {GangPipe} from './gang.pipe';
import {Module} from '@nestjs/common';
import {GangController} from './gang.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [GangController],
  providers: [GangPipe],
  exports: [GangPipe],
})
export class GangModule {}
