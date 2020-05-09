import {User, exampleUser} from '../';

export interface UserProfile {
  user: User;
}

export const exampleUserProfile: UserProfile = {
  user: exampleUser,
};
