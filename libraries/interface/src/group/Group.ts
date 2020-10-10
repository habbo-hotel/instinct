import { exampleRoom } from '../room';
import { exampleUser, User } from '../user';

export interface Group {
  id: number;
  name: string;
  desc: string;
  user?: User;
  badge: string;
  roomID: number;
  dateCreated: string; // ISO Date
}

export const exampleGroup: Group = {
  id: 1,
  name: 'Test Group',
  desc: 'This is an example of a group',
  user: exampleUser,
  badge: '123-321',
  roomID: exampleRoom.id,
  dateCreated: new Date().toISOString(),
};
