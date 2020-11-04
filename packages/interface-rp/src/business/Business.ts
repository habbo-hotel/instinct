import {exampleUser, User} from '@instinct-prj/interface';

export interface Business {
  id: number;
  owner: User;
  name: string;
  desc: string;
  badge: string;
  positions: BusinessPosition[];
}

export interface BusinessPosition {
  id: number;
  businessID: number;
  name: string;
  employees: User[];
}

export const exampleBusinessPosition: BusinessPosition = {
  id: 1,
  businessID: 1,
  name: 'Apprentice',
  employees: [exampleUser],
};

export const exampleBusiness: Business = {
  id: 1,
  owner: exampleUser,
  name: 'Armory',
  desc: 'We sell guns, bombs and freedom.',
  badge: 'ADM',
  positions: [
    {
      ...exampleBusinessPosition,
      name: 'Blacksmith',
      employees: [],
    },
    exampleBusinessPosition,
  ],
};
