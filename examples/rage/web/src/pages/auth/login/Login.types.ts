export interface LoginState {
  error?: string;
  username: string;
  password: string;
  showSpinner: boolean;
}

export const defaultLoginState: LoginState = {
  error: undefined,
  username: '',
  password: '',
  showSpinner: false,
};
