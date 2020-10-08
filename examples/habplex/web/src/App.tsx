import { initPages } from './pages';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { ContextProviders, Client, DataPolling, Router } from 'instinct-frontend';

export function App() {
  const [ locked, setLocked ] = useState(true);

  useEffect(() => {
    async function init(): Promise<void> {
      await initPages();
      setLocked(false);
    }

    init();
  }, [setLocked]);

  if (locked) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return (
    <ContextProviders>
      <Router />
      <Client/>
      <DataPolling/>
      <ToastContainer />
    </ContextProviders>
  );
}
