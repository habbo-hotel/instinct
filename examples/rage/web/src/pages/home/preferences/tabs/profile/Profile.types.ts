export interface ProfilePreferencesState {
  youtube: string;
  showSpinner: boolean;
}

export const defaultProfilePreferencesState: ProfilePreferencesState = {
  youtube: '',
  showSpinner: false,
}