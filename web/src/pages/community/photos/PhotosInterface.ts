import { Photo } from 'instinct-interfaces';

export interface PhotosState {
  photos: Photo[];
  showSpinner: boolean;
}

export const defaultPhotosState: PhotosState = {
  photos: [],
  showSpinner: true,
};
