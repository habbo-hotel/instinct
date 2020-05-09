import { Business } from 'instinct-rp-interfaces';

export interface BusinessService {

  getAll(): Promise<Business[]>;

  getByID(gangID: number): Promise<Business>;

  search(name: string): Promise<Business[]>;
}