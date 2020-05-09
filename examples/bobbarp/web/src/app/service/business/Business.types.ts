import { Business, BusinessJob } from 'instinct-rp-interfaces';

export interface BusinessService {

  getAll(): Promise<Business[]>;

  getByID(gangID: number): Promise<Business>;

  getVacantJobs(): Promise<BusinessJob[]>;

  getJobByID(jobID: number): Promise<BusinessJob>;

  search(name: string): Promise<Business[]>;
}