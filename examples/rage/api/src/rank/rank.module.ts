import {RankPipe} from './rank.pipe';
import {Module} from '@nestjs/common';
import {RankController} from './rank.controller';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RankController],
  providers: [RankPipe],
  exports: [RankPipe],
})
export class RankModule {}
