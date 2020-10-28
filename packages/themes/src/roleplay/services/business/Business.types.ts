import {Business} from '@instinct-prj/interface-rp';

export interface BusinessService {
  getAll(): Promise<Business[]>;
  getByID(businessID: string): Promise<Business>;
}
