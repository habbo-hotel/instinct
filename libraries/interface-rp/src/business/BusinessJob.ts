import {User} from '../user';

export enum BusinessJobRank {
  Owner = '3',
  Manager = '2',
  Employee = '1',
}

export interface BusinessJob {
  id: number;
  businessID: number;
  name: string;
  salary: number;
  rank: BusinessJobRank;
  workEverywhere: boolean;
  users?: User[];
}

export const exampleBusinessJob: BusinessJob = {
  id: 1,
  businessID: 1,
  name: 'Police OFficer',
  salary: 100,
  rank: BusinessJobRank.Employee,
  workEverywhere: true,
};
