import {UserModule} from './user';
import {RoomModule} from './room';
import {RankModule} from './rank';
import {PhotoModule} from './photo';
import {GroupModule} from './group';
import {Module} from '@nestjs/common';
import {HealthModule} from './health';
import {CommonModule} from './common';
import {ConfigModule} from './config';
import {ArticleModule} from './article';
import {SessionModule} from './session';
import {FeatureModule} from './feature';
import {DatabaseModule} from './database';
import {BetaCodeModule} from './beta-code';

@Module({
  imports: [
    UserModule,
    RankModule,
    RoomModule,
    PhotoModule,
    GroupModule,
    ConfigModule,
    CommonModule,
    ArticleModule,
    HealthModule,
    SessionModule,
    FeatureModule,
    DatabaseModule,
    BetaCodeModule,
  ],
  exports: [
    UserModule,
    RankModule,
    RoomModule,
    PhotoModule,
    GroupModule,
    ConfigModule,
    CommonModule,
    ArticleModule,
    FeatureModule,
    HealthModule,
    SessionModule,
    DatabaseModule,
    BetaCodeModule,
  ],
})
export class InstinctModule {}
