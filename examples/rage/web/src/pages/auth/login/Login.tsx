import {TwoFactor} from './two-factor';
import {LoginForm} from './login-form';
import { GuestLayout } from 'components';
import { defaultLoginState, LoginState } from './';
import React, { useContext, useState } from 'react';
import { Card, ConfigContext, setURL } from 'instinct-frontend';

setURL('login', <Login />);

export function Login() {
  const configContext = useContext(ConfigContext);
  const [state, setState] = useState<LoginState>(defaultLoginState);

  function onTwoStepVerification(twoFactorID: number): void {
    setState({
      twoFactorID,
    })
  }

  return (
    <GuestLayout>
      <div>
        <h2>Login</h2>
        <p>Welcome to {configContext.siteName}. If you are a current member, please sign in below.</p>
      </div>
      <Card className="w-100">
        {
          state.twoFactorID === undefined
            ? <LoginForm onTwoStepVerification={onTwoStepVerification}/>
            : <TwoFactor twoFactorID={state.twoFactorID}/>
        }
      </Card>
    </GuestLayout>
  );
}
