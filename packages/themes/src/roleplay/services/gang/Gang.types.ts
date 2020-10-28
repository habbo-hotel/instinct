import {Gang} from '@instinct-prj/interface-rp';

export interface GangService {
  getAll(): Promise<Gang[]>;
  getByID(gangID: string): Promise<Gang>;
}
