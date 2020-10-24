import {Photo} from '@instinct/interface';

export interface PhotosState {
  photos: Photo[];
  showSpinner: boolean;
}

export const defaultPhotosState: PhotosState = {
  photos: [],
  showSpinner: true,
};
