import { Photo } from 'fashionkilla-interfaces';

export interface PhotoInterface {
  getAll(): Promise<Photo[]>;

  getByID(photoID: string): Promise<Photo>;
}
