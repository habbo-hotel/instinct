export interface TwoFactorQRState {
  qrCode?: string;
  showSpinner: boolean;
}

export const defaultTwoFactorQRState: TwoFactorQRState = {
  qrCode: undefined,
  showSpinner: true,
}