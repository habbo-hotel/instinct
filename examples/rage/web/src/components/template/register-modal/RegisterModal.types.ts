export interface RegisterModalState {
  username: string;
  password: string;
  passwordAgain: string;
  email: string;
  showSpinner: boolean;
  recaptcha?: string;
}

export const defaultRegisterModalState: RegisterModalState = {
  username: '',
  password: '',
  passwordAgain: '',
  email: '',
  showSpinner: false,
  recaptcha: undefined,
};
