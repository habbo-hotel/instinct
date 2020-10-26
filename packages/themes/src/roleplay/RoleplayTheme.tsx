import '@instinct/frontend';
import React, {useEffect, useState} from 'react';
import {WebSocketContextProvider} from './context/web-socket';
import {Bootstrap, ContextProviders} from '@instinct/frontend';

export function RoleplayTheme() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      await import('./pages');
      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <ContextProviders>
      <WebSocketContextProvider>
        <Bootstrap />
      </WebSocketContextProvider>
    </ContextProviders>
  );
}
