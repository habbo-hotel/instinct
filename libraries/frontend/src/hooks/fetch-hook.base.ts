import { useEffect, useState } from 'react';

export function createFetchHook<T>(promise: () => Promise<T>): T | undefined {
  const [state, setState] = useState<T>();

  useEffect(() => {
    async function fetchData() {
      const data = await promise();
      setState(data);
    }

    fetchData();
  }, []);

  return state;
}
