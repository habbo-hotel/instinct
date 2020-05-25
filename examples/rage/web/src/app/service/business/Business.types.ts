import { Business, BusinessJobApplication, BusinessPosition } from 'instinct-rp-interfaces';

export interface BusinessService {

  getAll(): Promise<Business[]>;

  getByID(gangID: number): Promise<Business>;

  getAllPositions(): Promise<BusinessPosition[]>;

  getVacantPositions(): Promise<BusinessPosition[]>;

  getPositionByID(positionID: number): Promise<BusinessPosition>;

  search(name: string): Promise<Business[]>;

  applyForJob(jobID: number, content: string): Promise<BusinessJobApplication>;
}