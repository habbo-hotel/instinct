import { Business } from 'instinct-rp-interfaces';

export interface ViewBusinessState {
  business?: Business;
  showSpinner: boolean;
}

export const defaultViewBusinessState: ViewBusinessState = {
  business: undefined,
  showSpinner: true,
}

export interface BusinessTypeHandlerProps {
  business?: Business;
}