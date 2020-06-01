export interface AuthError {
  type: AuthErrorType;
  data: string;
}

export type AuthErrorType = 'auth_error' | 'two_factor';