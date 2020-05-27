import { Rank } from 'instinct-rp-interfaces';

export interface StaffState{
  ranks: Rank[];
  showSpinner: boolean;
}

export const defaultStaffState: StaffState = {
  ranks: [],
  showSpinner: true,
}