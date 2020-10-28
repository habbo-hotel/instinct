import {exampleUser, User} from '@instinct-prj/interface';

export interface Business {
  id: number;
  owner: User;
  name: string;
  desc: string;
  badge: string;
  employees: User[];
}

export const exampleBusiness: Business = {
  id: 1,
  owner: exampleUser,
  name: 'Police',
  desc: 'This corporation is a test',
  badge: 'ADM',
  employees: [exampleUser],
};
