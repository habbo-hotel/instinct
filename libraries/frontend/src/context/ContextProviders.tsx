import React from 'react';
import {
  ContextProvidersProps,
  ConfigContextProvider,
  SessionContextProvider,
  ThemeContextProvider,
  HealthContextProvider,
} from './index';
import { BootStrap } from '../components/utility/bootstrap/Bootstrap';

export function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <>
      <ConfigContextProvider>
        <SessionContextProvider>
          <HealthContextProvider>
            <ThemeContextProvider>
              <BootStrap>{children}</BootStrap>
            </ThemeContextProvider>
          </HealthContextProvider>
        </SessionContextProvider>
      </ConfigContextProvider>
    </>
  );
}
