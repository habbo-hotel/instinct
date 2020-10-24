import {exampleUser, User} from '@instinct/interface';

export interface Gang {
  id: number;
  owner: User;
  members: User[];
}

export const exampleGang: Gang = {
  id: 1,
  owner: exampleUser,
  members: [exampleUser],
};
