import {exampleUser, User} from '../user';
import {BusinessPosition} from './BusinessPosition';

export interface Business {
  id: number;
  name: string;
  desc: string;
  badge: string;
  owner: User;
  createdAt: string; // ISO Date
  roomID: number;
  totalEmployees: number;
  positions?: BusinessPosition[];
}

export const exampleBusiness: Business = {
  id: 1,
  name: 'Police',
  desc: 'Enforcers of the law',
  badge: 'ADM',
  owner: exampleUser,
  createdAt: new Date().toISOString(),
  roomID: 1,
  totalEmployees: 0,
};
