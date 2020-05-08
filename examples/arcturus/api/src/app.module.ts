import { join } from 'path';
import { Module } from '@nestjs/common';
import { InstinctModule } from 'instinct-backend';
import {ServeStaticModule} from '@nestjs/serve-static';

@Module({
  imports: [
    InstinctModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveStaticOptions: {
        cacheControl: true,
      },
    }),
  ],
})
export class AppModule {}
