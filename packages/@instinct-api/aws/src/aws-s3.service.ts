import {S3} from 'aws-sdk';
import {Injectable} from '@nestjs/common';
import {ConfigRepository} from '@instinct-api/database';

@Injectable()
export class AWSS3Service {
  private readonly s3 = new S3();

  constructor(private readonly configRepo: ConfigRepository) {}

  async getObjectURL(key: string): Promise<string> {
    const config = await this.configRepo.getConfig();
    return this.s3.getSignedUrlPromise('getObject', {
      Bucket: config.awsS3Bucket,
      Key: key,
    });
  }

  async deleteObject(key: string): Promise<void> {
    const config = await this.configRepo.getConfig();
    await this.s3.deleteObject({
      Bucket: config.awsS3Bucket,
      Key: key,
    });
  }
}
