import { exampleUser, User } from '../user';

export interface Update {
  id: number;
  user: User;
  title: string;
  content: string;
  datePosted: string; // ISO Date
}

export const exampleUpdate: Update = {
  id: 1,
  user: exampleUser,
  title: 'First Update',
  content: '#First',
  datePosted: new Date().toISOString(),
}