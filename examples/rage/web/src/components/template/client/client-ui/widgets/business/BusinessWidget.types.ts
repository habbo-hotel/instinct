import { Business } from 'instinct-rp-interfaces';

export interface BusinessWidgetState {
  activeBusiness?: Business;
  businesses: Business[];
  showSpinner: boolean;
}

export const defaultBusinessWidgetState: BusinessWidgetState = {
  activeBusiness: undefined,
  businesses: [],
  showSpinner: true,
}