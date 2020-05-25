import {exampleUser, User} from '../user';
import {BusinessPosition} from './BusinessPosition';

export enum BusinessType {
  Government = 'government',
  Private = 'private',
}

export interface Business {
  id: number;
  name: string;
  desc: string;
  badge: string;
  owner: User;
  createdAt: string; // ISO Date
  roomID: number;
  bankBalance: number;
  totalEmployees: number;
  type: BusinessType;
  positions?: BusinessPosition[];
}

export const exampleBusiness: Business = {
  id: 1,
  name: 'Police',
  desc: 'Enforcers of the law',
  badge: 'ADM',
  owner: exampleUser,
  bankBalance: 0,
  createdAt: new Date().toISOString(),
  roomID: 1,
  type: BusinessType.Government,
  totalEmployees: 0,
};
