import { Business } from 'instinct-rp-interfaces';

export interface SearchBusinessesState {
  businesses: Business[];
  showSpinner: boolean;
  query: string;
}

export const defaultSearchBusinessesState: SearchBusinessesState = {
  businesses: [],
  showSpinner: false,
  query: '',
}