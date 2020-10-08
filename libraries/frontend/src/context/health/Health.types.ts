import { exampleHealth, Health } from 'instinct-interfaces';

export interface HealthContext {
  health: Health;
  setHealth(changes: Partial<Health>): void;
}

export const defaultHealthInterface: HealthContext = {
  health: exampleHealth,
  setHealth(changes: Partial<Health>) {},
};
