import React from 'react';
import { Bootstrap, ContextProviders } from '@instinct/frontend';

export function App() {
  return (
    <ContextProviders>
      <Bootstrap/>
    </ContextProviders>
  );
}
