import { BusinessPosition } from 'instinct-rp-interfaces';

export interface ApplyForBusinessProps {
  position?: BusinessPosition;
}

export interface ApplyForPositionState {
  content: string;
  showSpinner: boolean;
  showSuccess: boolean;
}

export const defaultApplyForPositionState: ApplyForPositionState = {
  content: '',
  showSpinner: false,
  showSuccess: false,
}
