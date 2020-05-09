import { Gang } from 'instinct-rp-interfaces';

export interface GangService {

  getAll(): Promise<Gang[]>;

  getByID(gangID: number): Promise<Gang>;

  search(name: string): Promise<Gang[]>;
}