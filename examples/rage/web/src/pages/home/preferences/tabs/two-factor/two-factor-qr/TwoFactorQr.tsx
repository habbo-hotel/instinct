import QRCode from 'qrcode.react';
import {Icon} from 'instinct-frontend';
import {sessionService} from 'app/service';
import React, {useEffect, useState} from 'react';
import {defaultTwoFactorQRState, TwoFactorQRState} from './index';

export function TwoFactorQR() {
  const [ state, setState ] = useState<TwoFactorQRState>(defaultTwoFactorQRState);

  useEffect(() => {
    async function fetchQRCode(): Promise<void> {
      const qrCode: string = await sessionService.getMyTwoFactorQrCode();
      setState({
        qrCode,
        showSpinner: false,
      });
    }

    fetchQRCode();
  }, []);

  return (
    <>
      {
        state.showSpinner
          ? <Icon className="fa-spin" family="fas" type="spinner"/>
          : <QRCode value={state.qrCode!}/>
      }
    </>
  )
}