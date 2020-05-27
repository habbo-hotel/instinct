import { Update } from 'instinct-rp-interfaces';

export interface UpdateService {
  getAll(): Promise<Update[]>;

  getOneByID(updateID: number): Promise<Update>;
}
