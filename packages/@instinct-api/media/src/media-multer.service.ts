import {RequestWithSession} from '@instinct-api/session';
import {Injectable} from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import AWS from 'aws-sdk';
import MulterS3 from 'multer-s3';
import {v4 as uuidv4} from 'uuid';
import {ConfigRepository} from '@instinct-api/database';

@Injectable()
export class MediaMulterService implements MulterOptionsFactory {
  constructor(private readonly configRepo: ConfigRepository) {}

  async createMulterOptions(): Promise<MulterModuleOptions> {
    const config = await this.configRepo.getConfig();
    return {
      storage: MulterS3({
        s3: new AWS.S3(),
        bucket: config.awsS3Bucket,
        key: (
          req: RequestWithSession,
          file: any,
          cb: (error: Error | null, s3Path: string) => void
        ) => {
          const fileName = `${uuidv4()}-${
            file.originalname
          }-${Date.toString()}`;
          const s3Path = `users/${req.user.id}/media/${fileName}`;
          cb(null, s3Path);
        },
      }),
    };
  }
}
