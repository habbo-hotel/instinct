import { BusinessPosition } from 'instinct-rp-interfaces';

export interface VacantPositionsState {
  positions: BusinessPosition[];
  showSpinner: boolean;
}

export const defaultVacantPositionState: VacantPositionsState = {
  positions: [],
  showSpinner: true,
};
