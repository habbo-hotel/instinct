import { PhotoInterface } from './';
import { AxiosResponse } from 'axios';
import { Photo } from '../../../../../interface/src/photo';
import { backendAPI } from '../../BackendAPI';

class PhotoService implements PhotoInterface {
  async getAll() {
    const photos: AxiosResponse<Photo[]> = await backendAPI.get('photos');
    return photos.data;
  }

  async getByID(photoID: string) {
    const photo: AxiosResponse<Photo> = await backendAPI.get(`photos/${photoID}`);
    return photo.data;
  }
}

export const photoService: PhotoInterface = new PhotoService();
