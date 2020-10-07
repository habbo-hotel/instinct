import React, { useContext, useEffect } from 'react';
import { setURL, themeContext } from 'instinct-frontend';

setURL('play', <PlayPage />);

export function PlayPage() {
  const { toggleClient } = useContext(themeContext);

  useEffect(() => {
    toggleClient!(true);
  });

  return null;
}
