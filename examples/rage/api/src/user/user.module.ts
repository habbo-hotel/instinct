import {UserPipe} from './user.pipe';
import {Module} from '@nestjs/common';
import {UserController} from './user.controller';
import {CommonModule} from '../common/common.module';
import {GoogleModule} from '../google/google.module';
import {DatabaseModule} from '../database/database.module';
import {UserLeaderBoardService} from './leaderboard.service';
import {UserLeaderBoardController} from './leaderboard.controller';
import {UserExistsConstraint} from './constraint/user-exists/user-exists.constraint';
import {UniqueEmailConstraint} from './constraint/unique-email/unique-email.constraint';
import {UniqueUsernameConstraint} from './constraint/unique-username/unique-username.constraint';
@Module({
  imports: [CommonModule, GoogleModule, DatabaseModule],
  controllers: [UserController, UserLeaderBoardController],
  providers: [UserPipe, UserLeaderBoardService, UserExistsConstraint, UniqueEmailConstraint, UniqueUsernameConstraint],
  exports: [UserPipe, UserLeaderBoardService, UserExistsConstraint, UniqueEmailConstraint, UniqueUsernameConstraint],
})
export class UserModule {}
