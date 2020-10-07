import { exampleHealth, Health } from 'instinct-interfaces';

export interface HealthContext extends Health {
  setStore?: (changes: Partial<HealthContext>) => void;
}

export const defaultHealthInterface: HealthContext = {
  ...exampleHealth,
  setStore: undefined,
};
