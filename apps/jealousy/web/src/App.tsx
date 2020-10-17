import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Bootstrap, ContextProviders } from '@instinct/frontend';

export function App() {
  return (
    <ContextProviders>
      <Bootstrap/>
      <ToastContainer/>
    </ContextProviders>
  );
}
