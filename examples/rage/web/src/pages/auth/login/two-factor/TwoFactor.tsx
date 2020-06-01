import React, {useState} from 'react';
import {Form} from 'instinct-frontend';
import { defaultTwoFactorState, TwoFactorState, TwoFactorProps } from './';

export function TwoFactor({ twoFactorID }: TwoFactorProps) {
  const [ state, setState] = useState<TwoFactorState>(defaultTwoFactorState);

  function setValue<K extends keyof TwoFactorState>(key: string, value: TwoFactorState[K]): void {
    setState({
      ...state,
      [key]: value,
    })
  }

  async function onTwoFactorConfirm(): Promise<void> {

  }

  return (
    <>
      <h3>Multi Factor Authentication</h3>
      <p>Please enter your MFA code to complete login.</p>
      <Form className="guest-form" onSubmit={onTwoFactorConfirm}>
        <div className="form-group">
          <label>MFA Code</label>
          <input
            className={`form-control ${state.showError ? 'border-danger' : ''}`}
            value={state.oneTimeCode}
            onChange={e => setValue('username', e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-6">&nbsp; </div>
          <div className="col-6 text-right">
            <button className="btn btn-success" disabled={state.oneTimeCode === ''} type="submit">
              Submit
            </button>
          </div>
        </div>
      </Form>
    </>
  )
}