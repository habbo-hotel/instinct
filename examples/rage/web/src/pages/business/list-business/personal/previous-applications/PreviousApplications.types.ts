import { BusinessJobApplication } from 'instinct-rp-interfaces';

export interface PreviousApplicationsState {
  applications: BusinessJobApplication[];
  showSpinner: boolean;
}

export const defaultPreviousApplicationsState: PreviousApplicationsState = {
  applications: [],
  showSpinner: true,
}