import {User, exampleUser, UserStats, exampleUserStats} from '../';

export interface UserProfile {
  user: User;
  stats: UserStats;
}

export const exampleUserProfile: UserProfile = {
  user: exampleUser,
  stats: exampleUserStats,
};
