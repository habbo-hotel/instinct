import {UserModule} from './user';
import {RoomModule} from './room';
import {RankModule} from './rank';
import {GroupModule} from './group';
import {Module} from '@nestjs/common';
import {HealthModule} from './health';
import {CommonModule} from './common';
import {ArticleModule} from './article';
import {SessionModule} from './session';
import {DatabaseModule} from './database';

@Module({
  imports: [UserModule, RankModule, RoomModule, GroupModule, CommonModule, ArticleModule, HealthModule, SessionModule, DatabaseModule],
  exports: [UserModule, RankModule, RoomModule, GroupModule, CommonModule, ArticleModule, HealthModule, SessionModule, DatabaseModule],
})
export class InstinctModule {}
