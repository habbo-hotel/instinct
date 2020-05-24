import { Business } from 'instinct-rp-interfaces';

export interface BusinessListingsState {
  businesses: Business[];
  showSpinner: boolean;
}

export const defaultBusinessListingsState: BusinessListingsState = {
  businesses: [],
  showSpinner: false
}