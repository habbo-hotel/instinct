import {RankPipe} from './rank.pipe';
import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {RankConstraint} from './rank.constraint';
import {RankController} from './rank.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RankController],
  providers: [RankPipe, RankConstraint],
  exports: [RankPipe, RankConstraint],
})
export class RankModule {}
