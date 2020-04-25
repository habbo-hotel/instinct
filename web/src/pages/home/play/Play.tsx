import React from 'react';
import { Client, setURL } from 'components';

setURL('play', <PlayPage />);

export function PlayPage() {
  return (
    <Client/>
  )
}
