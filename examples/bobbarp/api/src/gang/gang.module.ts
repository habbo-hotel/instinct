import {Module} from '@nestjs/common';
import {GangPipe} from './gang.pipe';
import {DatabaseModule} from '../database';
import {GangService} from './gang.service';
import {GangController} from './gang.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [GangController],
  providers: [GangPipe, GangService],
  exports: [GangPipe, GangService],
})
export class GangModule {}
