import {exampleUser, User} from '../user';
import {exampleRoom, Room} from '../room';

export interface Business {
  id: number;
  name: string;
  desc: string;
  badge: string;
  user: User;
  createdAt: string; // ISO Date
  room: Room;
  members?: User[];
}

export const exampleBusiness: Business = {
  id: 1,
  name: 'Police',
  desc: 'Enforcers of the law',
  badge: 'ADM',
  user: exampleUser,
  createdAt: new Date().toISOString(),
  room: exampleRoom,
  members: [],
};
