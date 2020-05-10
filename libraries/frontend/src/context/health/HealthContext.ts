import { createContext } from 'react';
import { defaultHealthInterface, HealthTypes } from './Health.types';

export const HealthContext = createContext<HealthTypes>(defaultHealthInterface);
