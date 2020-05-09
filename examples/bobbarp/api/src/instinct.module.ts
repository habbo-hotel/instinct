import {UserModule} from './user';
import {RoomModule} from './room';
import {RankModule} from './rank';
import {GangModule} from './gang';
import {BusinessModule} from './business';
import {Module} from '@nestjs/common';
import {HealthModule} from './health';
import {CommonModule} from './common';
import {ArticleModule} from './article';
import {SessionModule} from './session';
import {DatabaseModule} from './database';

@Module({
  imports: [UserModule, RankModule, GangModule, RoomModule, BusinessModule, CommonModule, ArticleModule, HealthModule, SessionModule, DatabaseModule],
  exports: [UserModule, RankModule, GangModule, RoomModule, BusinessModule, CommonModule, ArticleModule, HealthModule, SessionModule, DatabaseModule],
})
export class InstinctModule {}
