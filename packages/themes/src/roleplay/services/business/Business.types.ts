import {Business} from '@instinct/interface-rp';

export interface BusinessService {
  getAll(): Promise<Business[]>;
  getByID(businessID: string): Promise<Business>;
}
