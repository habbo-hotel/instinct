import {Gang} from '../gang';
import {BusinessPosition, Rank} from '../';

export interface User {
  id: number;
  username: string;
  motto: string;
  credits: number;
  pixels: number;
  points: number;
  online: boolean;
  figure: string;
  twoFactor: boolean;
  joinDate: string; // ISO Date
  lastLoginDate: string; // ISO Date
  youtube: string;
  job?: BusinessPosition;
  rank?: Omit<Rank, 'users'>;
  gangs?: Array<Omit<Gang, 'owner'>>;
  gang?: Gang;
}

export const exampleUser: User = {
  id: 1,
  username: 'Test',
  motto: 'I am a test!',
  credits: 1,
  pixels: 1,
  points: 1,
  online: false,
  twoFactor: false,
  figure: 'sh-908-92.hd-180-1015.lg-285-77.hr-828-158640.ch-210-153640',
  joinDate: new Date().toISOString(),
  lastLoginDate: new Date().toISOString(),
  youtube: '',
};
