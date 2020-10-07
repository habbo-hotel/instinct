import React from 'react';
import {
  ContextProvidersProps,
  ConfigContextProvider,
  SessionContextProvider,
  ThemeContextProvider,
  HealthContextProvider,
} from './index';

export function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <>
      <ConfigContextProvider>
        <SessionContextProvider>
          <HealthContextProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </HealthContextProvider>
        </SessionContextProvider>
      </ConfigContextProvider>
    </>
  );
}
