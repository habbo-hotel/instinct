import React from 'react';
import { SessionContextProvider } from './session';
import { ContextProvidersProps, ConfigProvider, ThemeContextProvider } from 'instinct-frontend';

export function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <>
      <ConfigProvider>
        <SessionContextProvider>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </SessionContextProvider>
      </ConfigProvider>
    </>
  );
}
