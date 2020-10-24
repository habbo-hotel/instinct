import {Gang} from '@instinct/interface-rp';

export interface GangService {
  getAll(): Promise<Gang[]>;
  getByID(gangID: string): Promise<Gang>;
}
