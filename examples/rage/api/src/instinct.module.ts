import {join} from 'path';
import {Module} from '@nestjs/common';
import {UserModule} from './user/user.module';
import {RankModule} from './rank/rank.module';
import {GangModule} from './gang/gang.module';
import {RoomModule} from './room/room.module';
import {CommonModule} from './common/common.module';
import {ConfigModule} from './config/config.module';
import {HealthModule} from './health/health.module';
import {ServeStaticModule} from '@nestjs/serve-static';
import {ArticleModule} from './article/article.module';
import {SessionModule} from './session/session.module';
import {DatabaseModule} from './database/database.module';
import {BusinessModule} from './business/business.module';

@Module({
  imports: [
    UserModule,
    RankModule,
    GangModule,
    RoomModule,
    HealthModule,
    CommonModule,
    ConfigModule,
    ArticleModule,
    SessionModule,
    DatabaseModule,
    BusinessModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveStaticOptions: {
        cacheControl: true,
      },
    }),
  ],
  exports: [UserModule, RankModule, GangModule, RoomModule, BusinessModule, CommonModule, ArticleModule, HealthModule, SessionModule, DatabaseModule],
})
export class InstinctModule {}
