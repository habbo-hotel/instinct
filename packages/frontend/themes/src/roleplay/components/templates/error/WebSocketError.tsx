import React, {useContext, useState} from 'react';
import {BaseError, Icon} from '@instinct-prj/frontend';
import {webSocketContext} from '../../../context/web-socket';

export function WebSocketError() {
  const {retry} = useContext(webSocketContext);
  const [spinner, setSpinner] = useState(false);

  function retryConnection() {
    setSpinner(true);
    retry();
    setTimeout(() => {
      setSpinner(false);
    }, 1500);
  }

  return (
    <BaseError header="Web Socket failed to connect">
      <p>We could not secure a connection to our web socket server.</p>
      <button
        className="btn btn-primary"
        disabled={spinner}
        onClick={retryConnection}
      >
        {spinner ? (
          <>
            <Icon className="fa-spin mr-2" type="spinner" />
            Retrying Connection
          </>
        ) : (
          <>
            <Icon type="retry" />
            Try Again
          </>
        )}
      </button>
    </BaseError>
  );
}
