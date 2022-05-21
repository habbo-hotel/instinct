import {AxiosResponse} from 'axios';
import {backendAPI} from '../../api';
import {MediaService} from './Media.types';
import {Media} from '@instinct-prj/interface';

export class MediaServiceImplementation implements MediaService {
  async getMediaForSession() {
    const mediaResponse: AxiosResponse<Media[]> = await backendAPI.get('media');
    return mediaResponse.data;
  }

  async getMediaByID(mediaID: number) {
    const mediaResponse: AxiosResponse<Media> = await backendAPI.get(
      `media/${mediaID}`
    );
    return mediaResponse.data;
  }

  async createMedia(mediaFile: File) {
    const mediaResponse: AxiosResponse<Media> = await backendAPI.post(
      'media',
      mediaFile,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return mediaResponse.data;
  }
}
