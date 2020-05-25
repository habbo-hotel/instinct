import { BusinessPosition } from 'instinct-rp-interfaces';

export interface ViewPositionState {
  position?: BusinessPosition;
  showSpinner: boolean;
  application: string;
}

export const defaultViewPositionState: ViewPositionState = {
  application: '',
  position: undefined,
  showSpinner: true,
}