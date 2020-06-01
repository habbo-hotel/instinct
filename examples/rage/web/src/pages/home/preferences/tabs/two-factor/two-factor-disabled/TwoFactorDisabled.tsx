import {Icon} from 'instinct-frontend';
import {SessionContext} from 'app/context';
import {sessionService} from 'app/service';
import React, {useContext, useState} from 'react';
import { defaultTwoFactorDisabledState, TwoFactorDisabledState } from './index';

export function TwoFactorDisabled() {
  const sessionContext = useContext(SessionContext);
  const [ state, setState ] = useState<TwoFactorDisabledState>(defaultTwoFactorDisabledState);

  async function onEnable(): Promise<void> {
    setState({
      showSpinner: true,
    });
    await sessionService.enableTwoFactor();
    await sessionContext.refresh();
  }

  return (
    <>
      <h5>Two Factor Is <span className="text-danger">disabled</span></h5>
      <p>It is recommended you enable two factor authentication to prevent hackers from gaining access to your account.</p>
      <button className="btn btn-success btn-block" disabled={state.showSpinner} onClick={onEnable}>
        {
          state.showSpinner
            ? <Icon className="fa-spin" family="fas" type="spinner"/>
            : 'Enable Multi Factor'
        }
      </button>
    </>
  )
}