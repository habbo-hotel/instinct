import {Badge, Gang, User, Room, exampleUser, exampleRoom, exampleBadge, exampleBusiness, Business} from '../';

export interface UserProfile {
  user: User;
  rooms: Room[];
  badges: Badge[];
  friends: User[];
  businesses: Business[];
  gangs: Gang[];
}

export const exampleUserProfile: UserProfile = {
  user: exampleUser,
  rooms: [exampleRoom],
  badges: [exampleBadge],
  friends: [],
  businesses: [exampleBusiness],
  gangs: [],
};
