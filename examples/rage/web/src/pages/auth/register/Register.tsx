import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { GuestLayout } from 'components';
import { userService } from 'app/service';
import { SessionContext } from 'app/context';
import ReCAPTCHA from 'react-google-recaptcha';
import React, { useContext, useState } from 'react';
import { defaultRegisterState, RegisterState } from './';
import { Card, ConfigContext, Form, Icon, Loading, redirect, setURL } from 'instinct-frontend';

setURL('register', <Register />);

export function Register() {
  const configContext = useContext(ConfigContext);
  const sessionContext = useContext(SessionContext);
  const [state, setState] = useState<RegisterState>(defaultRegisterState);

  const keysToCheck: Array<keyof RegisterState> = ['email', 'recaptcha', 'username', 'password', 'passwordAgain'];

  const isDisabled: boolean = !!keysToCheck.find((key) => !state[key]) || state.password !== state.passwordAgain || state.showSpinner;

  function setValue<T extends keyof RegisterState>(key: T, value: RegisterState[T]): void {
    setState({
      ...state,
      [key]: value,
    });
  }

  async function tryRegister(): Promise<void> {
    try {
      setValue('showSpinner', true);
      await userService.create(state.username, state.password, state.email, state.recaptcha!);
      await sessionContext.login(state.username, state.password);
      redirect('home');
    } catch {
      toast.error('There was a problem and your account could not be created');
      setValue('showSpinner', false);
    }
  }

  return (
    <GuestLayout>
      <div>
        <h2>Register</h2>
        <p>You are moments away from joining an action packed adventure with gangs, heists and more!</p>
      </div>
      <Loading isLoading={state.showSpinner} text="Attempting to create account...">
        <Form className="guest-form" onSubmit={tryRegister}>
          <div className="row">
            <div className="col-12 form-group">
              <label>Username</label>
              <p>This is how you will be identified in-game</p>
              <input className="form-control" value={state.username} onChange={(e) => setValue('username', e.target.value)} />
            </div>
            <div className="col-12 form-group">
              <label>Email</label>
              <p>We will use this for verifying your identity.</p>
              <input className="form-control" value={state.email} onChange={(e) => setValue('email', e.target.value)} />
            </div>
          </div>
          <Card>
            <div className="form-group">
              <label>Password</label>
              <p>Use at least 6 characters. Include at least one letter and at least one number or special character.</p>
              <input
                className="form-control"
                type="password"
                value={state.password}
                onChange={(e) => setValue('password', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password Again</label>
              <input
                className="form-control"
                type="password"
                value={state.passwordAgain}
                onChange={(e) => setValue('passwordAgain', e.target.value)}
              />
            </div>
          </Card>
          <div className="row mt-3">
            <div className="col-12 form-group">
              <ReCAPTCHA sitekey={configContext.googleRecaptchaSiteKey} onChange={(x) => setValue('recaptcha', x as string)} />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6 mt-2">
              <Link className="guest-link" to="/login">
                <Icon family="fas" type="question-circle" />
                Already a Member?
              </Link>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-success" disabled={isDisabled} type="submit">
                Let's Go
              </button>
            </div>
          </div>
        </Form>
      </Loading>
    </GuestLayout>
  );
}
