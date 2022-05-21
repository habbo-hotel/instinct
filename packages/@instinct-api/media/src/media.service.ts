import {AWSS3Service} from '@impending-success/aws-core';
import {MediaEntity, MediaRepository} from '@impending-success/database-core';
import {Injectable} from '@nestjs/common';

@Injectable()
export class MediaService {
  constructor(
    private readonly mediaRepository: MediaRepository,
    private readonly awsS3Service: AWSS3Service
  ) {}

  async createMedia(
    userID: number,
    fileName: string,
    fileMime: string,
    awsS3Key: string
  ): Promise<MediaEntity> {
    const type = fileMime.includes('image') ? 'photo' : 'video';
    return this.mediaRepository.create({
      type,
      userID,
      fileName,
      awsS3Key,
    });
  }

  getMediaURL(media: MediaEntity): Promise<string> {
    return this.awsS3Service.getObjectURL(media.awsS3Key);
  }
}
