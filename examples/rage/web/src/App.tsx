import './pages';
import './components';
import React from 'react';
import { Client } from 'components';
import { ContextProviders } from 'app/context';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { DataPolling, Router } from 'instinct-frontend';

export function App() {
  return (
    <ContextProviders>
      <Router />
      <Client />
      <DataPolling />
      <ToastContainer />
    </ContextProviders>
  );
}
