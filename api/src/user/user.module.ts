import { UserPipe } from './user.pipe';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userConstraints } from './constraint';
import { UserController } from './user.controller';
import { CommonModule } from '../common/common.module';
import { DatabaseModule } from '../database/database.module';
import { UserLeaderBoardService } from './leaderboard.service';
import { UserLeaderBoardController } from './leaderboard.controller';

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [UserController, UserLeaderBoardController],
  providers: [
    UserPipe,
    UserService,
    UserLeaderBoardService,
    ...userConstraints,
  ],
  exports: [UserPipe, UserService, UserLeaderBoardService, ...userConstraints],
})
export class UserModule {}
