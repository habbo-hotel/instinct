import { createContext } from 'react';
import { defaultThemeContextInterface, ThemeContextInterface } from './Theme.types';

export const ThemeContext = createContext<ThemeContextInterface>(defaultThemeContextInterface);
