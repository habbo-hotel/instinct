export interface LoginState {
  username: string;
  password: string;
  showSpinner: boolean;
}

export const defaultLoginState: LoginState = {
  username: '',
  password: '',
  showSpinner: false,
};
