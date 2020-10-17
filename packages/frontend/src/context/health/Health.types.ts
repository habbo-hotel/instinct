import {exampleHealth, Health} from '@instinct/interface';

export interface HealthContext {
  health: Health;
  setHealth(changes: Partial<Health>): void;
}

export const defaultHealthInterface: HealthContext = {
  health: exampleHealth,
  setHealth(changes: Partial<Health>) {},
};
