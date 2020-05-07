import { UserModule } from './user';
import { RankModule } from './rank';
import { RoomModule } from './room';
import { PhotoModule } from './photo';
import { GroupModule } from './group';
import { CommonModule } from './common';
import { HealthModule } from './health';
import { ArticleModule } from './article';
import { SessionModule } from './session';
import { DatabaseModule } from './database';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, InstinctConfig } from './config';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({})
export class InstinctModule {
  static forRoot(config: InstinctConfig): DynamicModule {
    return {
      module: InstinctModule,
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
        DatabaseModule.forRoot(config),
        ConfigModule.forRoot(config),
        ServeStaticModule.forRoot({
          rootPath: config.publicFolder,
          serveStaticOptions: {
            cacheControl: true,
          },
        }),
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
        HealthModule,
        SessionModule,
        DatabaseModule,
      ],
    };
  }
}
