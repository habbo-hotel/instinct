import {RankPipe} from './rank.pipe';
import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {RankController} from './rank.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RankController],
  providers: [RankPipe],
  exports: [RankPipe],
})
export class RankModule {}
