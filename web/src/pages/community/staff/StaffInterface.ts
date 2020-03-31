import { Rank } from 'fashionkilla-interfaces';

export interface StaffState {
  ranks: Rank[];
  showSpinner: boolean;
}

export const defaultStaffState: StaffState = {
  ranks: [],
  showSpinner: true,
};
