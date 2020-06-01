
export interface LoginFormProps {
  onTwoStepVerification: (twoFactorID: number) => void;
}

export interface LoginFormState {
  error?: string;
  username: string;
  password: string;
  showSpinner: boolean;
}

export const defaultLoginFormState: LoginFormState = {
  error: undefined,
  username: '',
  password: '',
  showSpinner: false,
};
