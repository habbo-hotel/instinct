import { exampleUser, User } from '../user';

export interface Room {
  id: number;
  user?: User;
  name: string;
  desc: string;
  currentUsers: number;
  maxUsers: number;
}

export const exampleRoom: Room = {
  id: 1,
  user: exampleUser,
  name: 'Example Room',
  desc: 'This room is an example',
  currentUsers: 5,
  maxUsers: 20,
};
