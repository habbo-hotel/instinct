import { Link } from 'react-router-dom';
import { SessionContext } from 'app/context';
import React, { useContext, useState } from 'react';
import {Form, Icon, redirect } from 'instinct-frontend';
import {defaultLoginFormState, LoginFormProps, LoginFormState} from './';

export function LoginForm({ onTwoStepVerification }: LoginFormProps) {
  const sessionContext = useContext(SessionContext);
  const [state, setState] = useState<LoginFormState>(defaultLoginFormState);

  const keysToCheck: Array<keyof LoginFormState> = ['username', 'password'];

  const isDisabled: boolean = !!keysToCheck.find((key) => state[key] === '') || state.showSpinner;

  function setValue<T extends keyof LoginFormState>(key: T, value: LoginFormState[T]): void {
    setState({
      ...state,
      [key]: value,
    });
  }

  async function tryLoginForm(): Promise<void> {
    try {
      setState({
        ...state,
        error: undefined,
        showSpinner: true,
      })
      await sessionContext.login(state.username!, state.password!);
      redirect('home');
    } catch (error) {

      if (error?.type === 'two_factor') {
        onTwoStepVerification(error.data);
        return;
      }

      setState({
        ...state,
        error: error.data,
        showSpinner: false,
      });
    }
  }

  return (
    <Form className="guest-form" onSubmit={tryLoginForm}>
      <div className="form-group">
        <label>Username</label>
        <input
          className={`form-control ${state.error === 'invalid_username' ? 'border-danger' : ''}`}
          placeholder="John-Doe"
          value={state.username}
          onChange={(e) => setValue('username', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className={`form-control ${state.error === 'invalid_password' ? 'border-danger' : ''}`}
          type="password"
          value={state.password}
          onChange={(e) => setValue('password', e.target.value)}
        />
      </div>
      <div className="row">
        <div className="col-6 mt-2">
          <Link className="guest-link" to="/register">
            <Icon family="fas" type="question-circle" />
            New Player?
          </Link>
        </div>
        <div className="col-6 text-right">
          <button className="btn btn-success" disabled={isDisabled} type="submit">
            Let's Go
          </button>
        </div>
      </div>
    </Form>
  );
}
