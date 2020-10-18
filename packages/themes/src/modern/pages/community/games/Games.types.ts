import {User} from '@instinct/interface';

export interface GamesCardState {
  users: User[];
  showSpinner: boolean;
}

export const defaultGamesCardState: GamesCardState = {
  users: [],
  showSpinner: true,
};
