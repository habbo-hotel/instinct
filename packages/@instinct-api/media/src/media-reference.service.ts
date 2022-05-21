import {Injectable} from '@nestjs/common';
import {
  MediaReferenceEntity,
  MediaReferenceRepository,
} from '@instinct-api/database';

@Injectable()
export class MediaReferenceService {
  constructor(private readonly mediaReferenceRepo: MediaReferenceRepository) {}

  createReference(
    userID: number,
    mediaID: number,
    feature: string,
    description: string
  ): Promise<MediaReferenceEntity> {
    return this.mediaReferenceRepo.create({
      userID,
      mediaID,
      feature,
      description,
    });
  }
}
