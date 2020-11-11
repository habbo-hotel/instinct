import {exampleUser, User} from '@instinct-prj/interface';

export interface Gang {
  id: number;
  name: string;
  badge: string;
  owner: User;
  ranks: GangRank[];
}

export interface GangRank {
  id: number;
  gangID: number;
  name: string;
  canFire: boolean;
  canHire: boolean;
  canPromote: boolean;
  canDemote: boolean;
  users: User[];
}

export const exampleGangRank: GangRank = {
  id: 1,
  gangID: 1,
  name: '',
  canFire: false,
  canHire: false,
  canPromote: false,
  canDemote: false,
  users: [],
};

export const exampleGang: Gang = {
  id: 1,
  name: '',
  badge: '',
  owner: exampleUser,
  ranks: [exampleGangRank],
};
