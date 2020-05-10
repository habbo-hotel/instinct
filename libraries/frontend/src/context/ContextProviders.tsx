import React from 'react';
import { ContextProvidersProps, ConfigProvider, SessionContextProvider, ThemeContextProvider } from './index';

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
