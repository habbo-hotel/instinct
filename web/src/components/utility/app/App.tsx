import './pages';
import { ContextProviders } from 'app/context';
import 'react-toastify/dist/ReactToastify.css';
import { AppState, defaultAppState } from './';
import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { Footer, Loading, Router } from 'components';

export function App() {
  const [{ showSpinner }, setState] = useState<AppState>(defaultAppState);

  async function initApp(): Promise<void> {}

  useEffect(() => {
    initApp();
  }, []);

  return (
    <Loading isLoading={showSpinner}>
      <ContextProviders>
        <span className="page-container">
          <Router />
        </span>
        <Footer />
        <ToastContainer />
      </ContextProviders>
    </Loading>
  );
}
