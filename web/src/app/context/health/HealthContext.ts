import { createContext } from 'react';
import { defaultHealthInterface, HealthInterface } from './HealthInterface';

export const HealthContext = createContext<HealthInterface>(defaultHealthInterface);
