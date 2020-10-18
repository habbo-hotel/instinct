import React, {useEffect} from 'react';

export function AdminPanel() {
  useEffect(() => {
    async function loadPages() {
      await Promise.all([
        import('./dashboard'),
        import('./news-articles'),
        import('./users'),
        import('./website'),
      ]);
    }

    loadPages();
  }, []);

  return null;
}
