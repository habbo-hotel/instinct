import { exampleHealth, Health } from 'instinct-interfaces';

export interface HealthTypes extends Health {
  setStore?: (changes: Partial<HealthTypes>) => void;
}

export const defaultHealthInterface: HealthTypes = {
  ...exampleHealth,
  setStore: undefined,
};
