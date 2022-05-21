import {Media} from '@instinct-prj/interface';

export interface MediaService {
  getMediaForSession(): Promise<Media[]>;
  getMediaByID(mediaID: number): Promise<Media>;
  createMedia(mediaFile: File): Promise<Media>;
}
