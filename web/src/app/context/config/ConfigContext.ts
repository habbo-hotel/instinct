import { createContext } from 'react';
import { ConfigInterface, defaultConfigInterface } from './ConfigInterface';

export const ConfigContext = createContext<ConfigInterface>(defaultConfigInterface);
