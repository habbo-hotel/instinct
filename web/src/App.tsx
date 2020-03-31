import './pages';
import React from 'react';
import { Footer, Router } from 'components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ContextProviders } from './app/context';

export function App() {
  return (
    <ContextProviders>
      <span className="page-container">
        <Router />
      </span>
      <Footer />
      <ToastContainer />
    </ContextProviders>
  );
}
