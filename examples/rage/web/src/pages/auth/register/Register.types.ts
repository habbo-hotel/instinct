export interface RegisterState {
  email: string;
  username: string;
  password: string;
  passwordAgain: string;
  recaptcha?: string;
  showSpinner: boolean;
}

export const defaultRegisterState: RegisterState = {
  email: '',
  username: '',
  password: '',
  passwordAgain: '',
  recaptcha: undefined,
  showSpinner: false,
};
