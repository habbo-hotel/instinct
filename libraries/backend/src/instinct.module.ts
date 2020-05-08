import {UserModule} from './user';
import {RoomModule} from './room';
import {RankModule} from './rank';
import {PhotoModule} from './photo';
import {GroupModule} from './group';
import {Module} from '@nestjs/common';
import {HealthModule} from './health';
import {ArticleModule} from './article';
import {SessionModule} from './session';
import {DatabaseModule} from './database';
import {CommonModule, publicFolder} from './common';
import {ServeStaticModule} from '@nestjs/serve-static';

@Module({
  imports: [
    UserModule,
    RankModule,
    RoomModule,
    PhotoModule,
    GroupModule,
    CommonModule,
    ArticleModule,
    HealthModule,
    SessionModule,
    DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: publicFolder,
      serveStaticOptions: {
        cacheControl: true,
      },
    }),
  ],
  exports: [UserModule, RankModule, RoomModule, PhotoModule, GroupModule, CommonModule, ArticleModule, HealthModule, SessionModule, DatabaseModule],
})
export class InstinctModule {}
