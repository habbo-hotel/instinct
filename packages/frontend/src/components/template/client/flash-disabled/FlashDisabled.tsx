import React from 'react';
import './FlashDisabled.scss';
import {FrankBox} from '../../frank-box';
import {Icon} from '../../../generic/icon';

export function FlashDisabled() {
  return (
    <div className="flash-disabled">
      <FrankBox title="Almost There">
        <p>You need to enable Adobe Flashplayer to enjoy our game.</p>
        <a
          className="rounded-button blue plain"
          href="https://www.adobe.com/go/getflashplayer"
        >
          <Icon family="fab" type="adobe" />
          Enable Flash
        </a>
      </FrankBox>
    </div>
  );
}
