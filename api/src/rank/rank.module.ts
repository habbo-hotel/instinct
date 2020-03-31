import { RankPipe } from './rank.pipe';
import { Module } from '@nestjs/common';
import { RankService } from './rank.service';
import { RankController } from './rank.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RankController],
  providers: [RankPipe, RankService],
  exports: [RankPipe, RankService],
})
export class RankModule {}
