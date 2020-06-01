export interface TwoFactorProps {
  twoFactorID: number;
}

export interface TwoFactorState {
  oneTimeCode?: string;
  showError: boolean;
  showSpinner: boolean;
}

export const defaultTwoFactorState: TwoFactorState = {
  oneTimeCode: '',
  showError: false,
  showSpinner: false,
}