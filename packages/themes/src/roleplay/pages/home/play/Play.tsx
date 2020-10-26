import React, {useContext, useEffect} from 'react';
import {setURL, themeContext} from '@instinct/frontend';
import {ClientWidgets} from '../../../widgets/ClientWidgets';

setURL('play', <PlayPage />);

export function PlayPage() {
  const {setStore} = useContext(themeContext);

  useEffect(() => {
    setStore({showClient: true});
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <ClientWidgets />;
}
