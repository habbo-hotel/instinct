export interface LoginState {
  twoFactorID?: number;
}

export const defaultLoginState: LoginState = {
  twoFactorID: undefined,
};
