import { exampleUser, User } from '../';

export interface Rank {
  id: number;
  name: string;
  badge: string;
  users: User[];
}

export const exampleRank: Rank = {
  id: 1,
  name: 'Developers',
  badge: 'ADM',
  users: [],
};
