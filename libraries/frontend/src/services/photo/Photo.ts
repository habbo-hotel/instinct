import { PhotoTypes } from './';
import { backendAPI } from 'api';
import { AxiosResponse } from 'axios';
import { Photo } from 'instinct-interfaces';

class PhotoService implements PhotoTypes {
  async getAll() {
    const photos: AxiosResponse<Photo[]> = await backendAPI.get('photos');
    return photos.data;
  }

  async getByID(photoID: string) {
    const photo: AxiosResponse<Photo> = await backendAPI.get(`photos/${photoID}`);
    return photo.data;
  }
}

export const photoService: PhotoTypes = new PhotoService();
