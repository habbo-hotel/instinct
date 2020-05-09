import { BusinessJob } from 'instinct-rp-interfaces';

export interface ApplyForJobProps {
  job?: BusinessJob;
}

export interface ApplyForJobState {
  content: string;
  showSpinner: boolean;
  showSuccess: boolean;
}

export const defaultApplyForJobState: ApplyForJobState = {
  content: '',
  showSpinner: false,
  showSuccess: false,
}
