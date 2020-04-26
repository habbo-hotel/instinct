import './pages';
import React from 'react';
import { ContextProviders } from 'app/context';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
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
