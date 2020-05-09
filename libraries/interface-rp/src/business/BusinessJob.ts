import {User} from '../user';
import {Business} from './Business';

export enum BusinessJobRank {
  Owner = '3',
  Manager = '2',
  Employee = '1',
}

export interface BusinessJob {
  id: number;
  businessID: number;
  business?: Business;
  name: string;
  desc: string;
  salary: number;
  maleUniform: string;
  femaleUniform: string;
  rank: BusinessJobRank;
  workEverywhere: boolean;
  users?: User[];
  vacantSpots: number;
  applicationRequired: boolean;
}

export const exampleBusinessJob: BusinessJob = {
  id: 1,
  businessID: 1,
  name: 'Police Officer',
  desc: 'This job has no description',
  salary: 100,
  rank: BusinessJobRank.Employee,
  workEverywhere: true,
  vacantSpots: 0,
  maleUniform: '-',
  femaleUniform: '-',
  applicationRequired: true,
};
