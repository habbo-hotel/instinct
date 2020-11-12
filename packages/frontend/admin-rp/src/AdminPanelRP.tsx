import React, {useEffect} from 'react';

export function AdminPanelRP() {
  useEffect(() => {
    async function loadPages() {
      await import('./bootstrap');
    }

    loadPages();
  }, []);

  return null;
}
