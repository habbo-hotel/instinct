import { createContext } from 'react';
import { ConfigTypes, defaultConfigInterface } from './';

export const ConfigContext = createContext<ConfigTypes>(defaultConfigInterface);
