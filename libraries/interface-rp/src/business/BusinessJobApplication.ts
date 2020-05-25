import {exampleUser, User} from '../user';
import {BusinessPosition, exampleBusinessJob} from './BusinessPosition';

export interface BusinessJobApplication {
  id: number;
  job: BusinessPosition;
  user: User;
  content: string;
  createdAt: string; // ISO string
}

export const exampleBusinessJobApplication: BusinessJobApplication = {
  id: 1,
  job: exampleBusinessJob,
  user: exampleUser,
  content: 'I am a great candidate',
  createdAt: new Date().toISOString(),
};
