import React from 'react';
import {
  ClientContextProvider,
  ContextProvidersProps,
  ConfigContextProvider,
  SessionContextProvider,
  ThemeContextProvider,
  HealthContextProvider,
} from './index';
import {WebSocketContextProvider} from './web-socket/WebSocket.provider';

export function ContextProviders({children}: ContextProvidersProps) {
  return (
    <>
      <ConfigContextProvider>
        <SessionContextProvider>
          <WebSocketContextProvider>
            <ClientContextProvider>
              <HealthContextProvider>
                <ThemeContextProvider>{children}</ThemeContextProvider>
              </HealthContextProvider>
            </ClientContextProvider>
          </WebSocketContextProvider>
        </SessionContextProvider>
      </ConfigContextProvider>
    </>
  );
}
