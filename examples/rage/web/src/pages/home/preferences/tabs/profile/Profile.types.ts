export interface ProfilePreferencesState {
  youtube: string;
  showSuccess: boolean;
  showSpinner: boolean;
}

export const defaultProfilePreferencesState: ProfilePreferencesState = {
  youtube: '',
  showSuccess: false,
  showSpinner: false,
};
