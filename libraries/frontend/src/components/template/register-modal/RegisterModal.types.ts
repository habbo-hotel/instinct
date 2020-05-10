export interface RegisterModalState {
  username: string;
  password: string;
  passwordAgain: string;
  email: string;
  showSpinner: boolean;
}

export const defaultRegisterModalState: RegisterModalState = {
  username: '',
  password: '',
  passwordAgain: '',
  email: '',
  showSpinner: false,
};
