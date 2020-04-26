import React from 'react';
import './FlashDisabled.scss';
import { Icon } from 'components';

export function FlashDisabled() {
  return (
    <div>
      <div className="flash-disabled">
        <h1>Almost There</h1>
        <p>You need to enable Adobe Flashplayer to enjoy our game.</p>
        <a className="rounded-button blue plain" href="https://www.adobe.com/go/getflashplayer">
          <Icon family="fab"  type="adobe" />
          Enable Flash
        </a>
      </div>
    </div>
  )
}