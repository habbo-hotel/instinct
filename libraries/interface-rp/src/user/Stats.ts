import {exampleGang, Gang} from '../gang';
import {BusinessPosition, exampleBusinessJob} from '../business';

export interface UserStats {
  kills: number;
  deaths: number;
  arrests: number;
  health: number;
  maxHealth: number;
  armor: number;
  energy: number;
  hunger: number;
  hygiene: number;
  stamina: number;
  strength: number;
  intelligence: number;
  punches: number;
  weed: number;
  gang?: Gang;
  job: BusinessPosition;
  bankBalance: number;
  hasPhone: boolean;
  hasCar: boolean;
}

export const exampleUserStats: UserStats = {
  kills: 1,
  deaths: 0,
  arrests: 0,
  health: 100,
  maxHealth: 100,
  armor: 100,
  energy: 100,
  hunger: 100,
  hygiene: 100,
  stamina: 100,
  strength: 1,
  intelligence: 1,
  punches: 1,
  weed: 0,
  gang: exampleGang,
  job: exampleBusinessJob,
  bankBalance: 100,
  hasPhone: true,
  hasCar: true,
};
