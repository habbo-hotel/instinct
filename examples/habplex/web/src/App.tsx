import React from 'react';
import { Bootstrap } from './Bootstrap';
import { ContextProviders } from 'instinct-frontend';

export function App() {
  return (
    <ContextProviders>
      <Bootstrap/>
    </ContextProviders>
  );
}
