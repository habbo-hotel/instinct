import {exampleUser, User} from '../user';
import {BusinessJob, exampleBusinessJob} from './BusinessJob';

export interface JobApplication {
  id: number;
  job: BusinessJob;
  user: User;
  content: string;
  createdAt: string; // ISO string
}

export const exampleJobApplication: JobApplication = {
  id: 1,
  job: exampleBusinessJob,
  user: exampleUser,
  content: 'I am a great candidate',
  createdAt: new Date().toISOString(),
};
