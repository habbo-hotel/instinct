import {Module} from '@nestjs/common';
import {GangPipe} from './gang.pipe';
import {DatabaseModule} from '../database';
import {GangController} from './gang.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [GangController],
  providers: [GangPipe],
  exports: [GangPipe],
})
export class GangModule {}
