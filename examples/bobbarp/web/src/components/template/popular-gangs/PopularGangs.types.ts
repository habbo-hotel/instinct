import { Gang } from 'instinct-rp-interfaces';

export interface PopularGangsState {
  gangs: Gang[];
  showSpinner: boolean;
}

export const defaultPopularGangsState: PopularGangsState = {
  gangs: [],
  showSpinner: true,
}