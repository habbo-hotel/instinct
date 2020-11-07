import {useEffect, useState} from 'react';

export function createFetchHook<T>(
  promise: () => Promise<T>,
  refresh = 0
): T | undefined {
  const [state, setState] = useState<T>();

  useEffect(() => {
    setState(undefined);
    async function fetchData() {
      const data = await promise();
      setState(data);
    }

    fetchData();
  }, [refresh]);

  return state;
}
