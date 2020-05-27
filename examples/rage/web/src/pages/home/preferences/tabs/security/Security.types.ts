export interface SecurityPreferencesState {
  currentPassword: string;
  newPassword: string;
  newPasswordAgain: string;
  showSpinner: boolean;
  showSuccess: boolean;
}

export const defaultSecurityPreferencesState: SecurityPreferencesState = {
  currentPassword: '',
  newPassword: '',
  newPasswordAgain: '',
  showSpinner: false,
  showSuccess: false,
};
