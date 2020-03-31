import { User } from 'fashionkilla-interfaces';

export interface GamesCardState {
  users: User[];
  showSpinner: boolean;
}

export const defaultGamesCardState: GamesCardState = {
  users: [],
  showSpinner: true,
};
