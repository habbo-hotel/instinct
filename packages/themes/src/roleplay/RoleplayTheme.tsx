import '@instinct/frontend';
import React, {useEffect, useState} from 'react';
import {Bootstrap, ContextProviders} from '@instinct/frontend';

export function RoleplayTheme() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      await import('./pages');
      await import('./widgets');
      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <ContextProviders>
      <Bootstrap />
    </ContextProviders>
  );
}
