import { Photo } from 'instinct-interfaces';

export interface PhotoTypes {
  getAll(): Promise<Photo[]>;

  getByID(photoID: string): Promise<Photo>;
}
