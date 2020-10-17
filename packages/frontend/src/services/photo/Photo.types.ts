import {Photo} from '@instinct/interface';

export interface PhotoTypes {
  getAll(): Promise<Photo[]>;

  getByID(photoID: string): Promise<Photo>;
}
