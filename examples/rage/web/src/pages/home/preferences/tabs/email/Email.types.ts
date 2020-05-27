export interface EmailPreferencesState {
  email: string;
  password: string;
  showModal: boolean;
  showSuccess: boolean;
  showSpinner: boolean;
}

export const defaultEmailPreferencesState: EmailPreferencesState = {
  email: '',
  password: '',
  showModal: false,
  showSuccess: false,
  showSpinner: false,
};
