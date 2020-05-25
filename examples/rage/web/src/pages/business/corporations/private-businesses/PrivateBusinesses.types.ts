import { Business } from 'instinct-rp-interfaces';

export interface PrivateBusinessesState {
  businesses: Business[];
  showSpinner: boolean,
}

export const defaultPrivateBusinessesState: PrivateBusinessesState = {
  businesses: [],
  showSpinner: true,
}