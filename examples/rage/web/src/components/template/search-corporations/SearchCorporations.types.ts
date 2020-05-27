import { Business } from 'instinct-rp-interfaces';

export interface SearchCorporationsState {
  businesses: Business[];
  showSpinner: boolean;
  query: string;
  lastQuery?: string;
}

export const defaultSearchCorporationsState: SearchCorporationsState = {
  businesses: [],
  showSpinner: false,
  query: '',
  lastQuery: undefined,
};
