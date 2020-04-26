import { Photo } from 'instinct-interfaces';

export interface PhotoInterface {
  getAll(): Promise<Photo[]>;

  getByID(photoID: string): Promise<Photo>;
}
