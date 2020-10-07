import React, { useState } from 'react';
import { ContextProvidersProps } from '../ContextProviders.types';
import { ThemeContext, themeContext, defaultThemeContextInterface } from './';

export function ThemeContextProvider({ children }: ContextProvidersProps) {
  const [state, setState] = useState<ThemeContext>(defaultThemeContextInterface);

  function setStore(changes: Partial<ThemeContext>): void {
    setState((_) => ({
      ..._,
      ...changes,
    }));
  }

  return <themeContext.Provider value={{ ...state, setStore }}>{children}</themeContext.Provider>;
}
