import { User } from 'fashionkilla-interfaces';

export interface UserProfileState {
  user?: User;
  isLoading: boolean;
}

export const defaultUserProfileState: UserProfileState = {
  user: undefined,
  isLoading: true,
};

export interface UserProfileWidgetProps {
  user?: User;
}
