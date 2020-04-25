import 'dotenv/config';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { RankModule } from './rank/rank.module';
import { RoomModule } from './room/room.module';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { PhotoModule } from './photo/photo.module';
import { HealthModule } from './health/health.module';
import { CommonModule } from './common/common.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SessionModule } from './session/session.module';
import { ArticleModule } from './article/article.module';
import { DatabaseModule } from './database/database.module';

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
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
})
export class AppModule {}
