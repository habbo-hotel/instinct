import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {GoogleModule} from '../google';
import {CommonModule} from '../common';
import {DatabaseModule} from '../database';
import {userConstraints} from './constraint';
import {UserController} from './user.controller';
import {UserLeaderBoardService} from './leaderboard.service';
import {UserLeaderBoardController} from './leaderboard.controller';

@Module({
  imports: [CommonModule, GoogleModule, DatabaseModule],
  controllers: [UserController, UserLeaderBoardController],
  providers: [UserPipe, UserLeaderBoardService, ...userConstraints],
  exports: [UserPipe, UserLeaderBoardService, ...userConstraints],
})
export class UserModule {}
