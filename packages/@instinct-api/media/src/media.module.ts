import {MediaMulterService} from './media-multer.service';
import {Module} from '@nestjs/common';
import {MulterModule} from '@nestjs/platform-express';
import {AWSModule} from '@instinct-api/aws';
import {SessionModule} from '@instinct-api/session';
import {DatabaseModule} from '@instinct-api/database';
import {MediaController} from './media.controller';
import {MediaService} from './media.service';

@Module({
  imports: [
    DatabaseModule,
    SessionModule,
    MulterModule,
    AWSModule,
    MulterModule.registerAsync({
      useClass: MediaMulterService,
    }),
  ],
  controllers: [MediaController],
  providers: [MediaMulterService],
  exports: [MediaService],
})
export class UserMediaModule {}
