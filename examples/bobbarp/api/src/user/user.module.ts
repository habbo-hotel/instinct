import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {GoogleModule} from '../google';
import {CommonModule} from '../common';
import {UserService} from './user.service';
import {DatabaseModule} from '../database';
import {userConstraints} from './constraint';
import {UserController} from './user.controller';
import {UserLeaderBoardService} from './leaderboard.service';
import {UserLeaderBoardController} from './leaderboard.controller';

@Module({
  imports: [CommonModule, GoogleModule, DatabaseModule],
  controllers: [UserController, UserLeaderBoardController],
  providers: [UserPipe, UserService, UserLeaderBoardService, ...userConstraints],
  exports: [UserPipe, UserService, UserLeaderBoardService, ...userConstraints],
})
export class UserModule {}
