import './pages';
import React from 'react';
import { Client, Router } from 'components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ContextProviders } from './app/context';

export function App() {
  return (
    <ContextProviders>
      <Router />
      <Client/>
      <ToastContainer />
    </ContextProviders>
  );
}
