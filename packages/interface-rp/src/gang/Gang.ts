import {exampleUser, User} from '@instinct-prj/interface';

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
