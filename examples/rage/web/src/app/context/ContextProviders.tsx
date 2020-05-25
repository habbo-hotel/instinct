import React from 'react';
import { ThemeContextProvider } from './theme';
import { SessionContextProvider } from './session';
import { ContextProvidersProps, ConfigProvider, HealthProvider } from 'instinct-frontend';

export function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <>
      <ConfigProvider>
        <SessionContextProvider>
          <HealthProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </HealthProvider>
        </SessionContextProvider>
      </ConfigProvider>
    </>
  );
}
