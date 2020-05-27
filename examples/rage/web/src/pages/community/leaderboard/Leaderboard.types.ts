import { User } from 'instinct-rp-interfaces';

export interface LeaderBoardState {
  users: User[];
  showSpinner: boolean;
}

export const defaultLeaderboardState: LeaderBoardState = {
  users: [],
  showSpinner: true,
};
