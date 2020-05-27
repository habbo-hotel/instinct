export interface EmailPreferencesState {
  email: string;
  showSpinner: boolean;
}

export const defaultEmailPreferencesState: EmailPreferencesState = {
  email: '',
  showSpinner: false,
}