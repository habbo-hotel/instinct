import { BusinessPosition } from 'instinct-rp-interfaces';

export interface VacantJobsState {
  positions: BusinessPosition[];
  showSpinner: boolean;
}

export const defaultVacantJobsState: VacantJobsState = {
  positions: [],
  showSpinner: true,
}