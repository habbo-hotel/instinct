import { Badge, User, Room, Group, exampleUser, exampleRoom, exampleBadge, exampleGroup } from '../';

export interface UserProfile {
  user: User;
  rooms: Room[];
  badges: Badge[];
  friends: User[];
  groups: Group[];
}

export const exampleUserProfile: UserProfile = {
  user: exampleUser,
  rooms: [exampleRoom],
  badges: [exampleBadge],
  friends: [],
  groups: [exampleGroup],
};
