import './pages';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ContextProviders } from 'instinct-frontend';
import { Client, DataPolling, Router } from 'components';

export function App() {
  return (
    <ContextProviders>
      <Router />
      <Client/>
      <DataPolling/>
      <ToastContainer />
    </ContextProviders>
  );
}
