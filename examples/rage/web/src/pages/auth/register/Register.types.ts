export interface RegisterState {
  username: string;
  password: string;
  recaptcha?: string;
  showSpinner: boolean;
}

export const defaultRegisterState: RegisterState = {
  username: '',
  password: '',
  recaptcha: undefined,
  showSpinner: false,
};
