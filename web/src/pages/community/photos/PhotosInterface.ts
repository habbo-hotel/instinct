import { Photo } from 'fashionkilla-interfaces';

export interface PhotosState {
  photos: Photo[];
  showSpinner: boolean;
}

export const defaultPhotosState: PhotosState = {
  photos: [],
  showSpinner: true,
};
