import { User } from 'instinct-interfaces';

export interface UserOfTheWeekState {
  user?: User;
  showSpinner: boolean;
}

export const defaultUserOfTheWeekState: UserOfTheWeekState = {
  user: undefined,
  showSpinner: true,
};
