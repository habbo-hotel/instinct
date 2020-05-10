export interface LoginModalState {
  username: string;
  password: string;
  showSpinner: boolean;
}

export const defaultLoginModalState: LoginModalState = {
  username: '',
  password: '',
  showSpinner: false,
};
