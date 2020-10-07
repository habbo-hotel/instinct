import React from 'react';
import { ContextProvidersProps, ConfigContextProvider, SessionContextProvider, ThemeContextProvider } from './index';

export function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <>
      <ConfigContextProvider>
        <SessionContextProvider>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </SessionContextProvider>
      </ConfigContextProvider>
    </>
  );
}
