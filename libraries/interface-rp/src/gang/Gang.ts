import {exampleUser, User} from '../user';

export interface Gang {
  id: number;
  name: string;
  kills: number;
  deaths: number;
  owner: User;
  users?: User[];
}

export const exampleGang: Gang = {
  id: 1,
  name: 'The Gangsters',
  kills: 100,
  deaths: 20,
  owner: exampleUser,
};
