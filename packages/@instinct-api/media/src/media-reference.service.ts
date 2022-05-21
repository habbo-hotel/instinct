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
    profileID: number,
    mediaID: number,
    description: string
  ): Promise<MediaReferenceEntity> {
    return this.mediaReferenceRepo.create({
      userID,
      profileID,
      mediaID,
      description,
    });
  }
}
