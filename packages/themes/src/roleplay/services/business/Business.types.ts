import {Business, BusinessDTO} from '@instinct-prj/interface-rp';

export interface BusinessService {
  create(businessDTO: BusinessDTO): Promise<Business>;
  getAll(): Promise<Business[]>;
  getByID(businessID: string): Promise<Business>;
  delete(businessID: string): Promise<void>;
}
