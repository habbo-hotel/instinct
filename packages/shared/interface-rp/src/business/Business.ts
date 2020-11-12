import {exampleUser, User} from '@instinct-prj/interface';

export enum BusinessType {
  NORMAL = 'NORMAL',
  HOSPITAL = 'HOSPITAL',
}

export interface Business {
  id: number;
  owner: User;
  name: string;
  type: BusinessType;
  desc: string;
  badge: string;
  positions: BusinessPosition[];
}

export interface BusinessPosition {
  id: number;
  businessID: number;
  name: string;
  employees: User[];
  permissions: {
    manager: boolean;
    canHire: boolean;
    canFire: boolean;
    canPromote: boolean;
    canDemote: boolean;
  };
}

export const exampleBusinessPosition: BusinessPosition = {
  id: 1,
  businessID: 1,
  name: 'Apprentice',
  employees: [exampleUser],
  permissions: {
    manager: false,
    canHire: false,
    canFire: false,
    canPromote: false,
    canDemote: false,
  },
};

export const exampleBusiness: Business = {
  id: 1,
  owner: exampleUser,
  name: 'Armory',
  desc: 'We sell guns, bombs and freedom.',
  type: BusinessType.NORMAL,
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
