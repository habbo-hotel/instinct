import { exampleHealth, Health } from 'instinct-interfaces';

export interface HealthContext extends Health {
  setStore?: (changes: Partial<HealthContext>) => void;
  init?(): Promise<void>;
}

export const defaultHealthInterface: HealthContext = {
  ...exampleHealth,
  init: undefined,
  setStore: undefined,
};
