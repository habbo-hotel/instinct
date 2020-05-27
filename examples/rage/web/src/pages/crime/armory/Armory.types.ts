import { Weapon } from 'instinct-rp-interfaces';

export interface ArmoryState {
  weapons: Weapon[];
  showSpinner: boolean;
}

export const defaultArmoryState: ArmoryState = {
  weapons: [],
  showSpinner: true,
};
