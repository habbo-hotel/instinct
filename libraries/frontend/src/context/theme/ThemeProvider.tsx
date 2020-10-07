import React, { useState } from 'react';
import { ThemeContextInterface, ThemeContext, defaultThemeContextInterface } from './';
import { ContextProvidersProps } from '../ContextProviders.types';

export function ThemeContextProvider({ children }: ContextProvidersProps) {
  const [state, setState] = useState<ThemeContextInterface>(defaultThemeContextInterface);

  function setStore(changes: Partial<ThemeContextInterface>): void {
    setState((_) => ({
      ..._,
      ...changes,
    }));
  }

  return <ThemeContext.Provider value={{ ...state, setStore }}>{children}</ThemeContext.Provider>;
}
