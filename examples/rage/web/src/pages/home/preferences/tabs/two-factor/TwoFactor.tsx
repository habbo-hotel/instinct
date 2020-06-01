import React, {useContext} from 'react';
import {SessionContext} from 'app/context';
import {TwoFactorQR} from './two-factor-qr';
import {TwoFactorDisabled} from './two-factor-disabled';

export function TwoFactor() {
  const sessionContext = useContext(SessionContext);

  return (
    <>
      {
        sessionContext.session!.user.twoFactor
          ? <TwoFactorQR/>
          : <TwoFactorDisabled/>
      }
    </>
  )
}