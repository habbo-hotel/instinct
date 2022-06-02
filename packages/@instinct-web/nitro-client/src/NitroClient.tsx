import React, {useContext} from 'react';
import {sessionContext, configContext} from '@instinct-web/core';

export function NitroClient() {
  const {sso} = useContext(sessionContext);
  const {config} = useContext(configContext);

  if (!sso) {
    return null;
  }

  return (
    <iframe
      src={`${config.nitroURL}?sso=${sso}`}
      style={{height: '100%', width: '100%'}}
      frameBorder="none"
    />
  );
}
