import React from 'react';
import { ContextProviders, Router } from 'instinct-frontend';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ContextProviders>
      <Router/>
    </ContextProviders>
  );
}
