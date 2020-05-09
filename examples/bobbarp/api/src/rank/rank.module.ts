import {RankPipe} from './rank.pipe';
import {Module} from '@nestjs/common';
import {RankService} from './rank.service';
import {DatabaseModule} from '../database';
import {RankController} from './rank.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RankController],
  providers: [RankPipe, RankService],
  exports: [RankPipe, RankService],
})
export class RankModule {}
