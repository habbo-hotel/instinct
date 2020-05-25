import {User} from '../user';
import {Business} from './Business';

export interface BusinessPosition {
  id: number;
  businessID: number;
  business?: Business;
  name: string;
  salary: number;
  maleUniform: string;
  femaleUniform: string;
  workEverywhere: boolean;
  employees?: User[];
  vacantSpots: number;
  applicationRequired: boolean;
  alreadyApplied?: boolean;
}

export const exampleBusinessJob: BusinessPosition = {
  id: 1,
  businessID: 1,
  name: 'Police Officer',
  salary: 100,
  workEverywhere: true,
  vacantSpots: 0,
  maleUniform: '-',
  femaleUniform: '-',
  applicationRequired: true,
  alreadyApplied: false,
};
