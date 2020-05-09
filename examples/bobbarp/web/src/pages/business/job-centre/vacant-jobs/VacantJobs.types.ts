import { BusinessJob } from 'instinct-rp-interfaces';

export interface VacantJobsState {
  jobs: BusinessJob[];
  showSpinner: boolean;
}

export const defaultVacantJobsState: VacantJobsState = {
  jobs: [],
  showSpinner: true,
}