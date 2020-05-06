import { setURL } from 'components';
import { ThemeContext } from 'instinct-frontend';
import React, { useContext, useEffect } from 'react';

setURL('play', <PlayPage />);

export function PlayPage() {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    themeContext.toggleClient!(true);
  });

  return null;
}
