import {join} from 'path';
import {UserModule} from './user';
import {RoomModule} from './room';
import {RankModule} from './rank';
import {GangModule} from './gang';
import {Module} from '@nestjs/common';
import {HealthModule} from './health';
import {CommonModule} from './common';
import {ArticleModule} from './article';
import {ConfigModule} from './config';
import {SessionModule} from './session';
import {DatabaseModule} from './database';
import {BusinessModule} from './business';
import {ServeStaticModule} from '@nestjs/serve-static';

@Module({
  imports: [
    UserModule,
    RankModule,
    GangModule,
    RoomModule,
    CommonModule,
    ConfigModule,
    BusinessModule,
    ArticleModule,
    HealthModule,
    SessionModule,
    DatabaseModule,
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
