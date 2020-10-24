import {exampleUser, User} from '@instinct/interface';

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
  name: 'Test Corp',
  desc: 'This corporation is a test',
  badge: 'ADM',
  employees: [exampleUser],
};
