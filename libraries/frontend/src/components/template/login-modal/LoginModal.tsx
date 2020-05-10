import { redirect } from 'components';
import { toast } from 'react-toastify';
import { SessionContext } from 'context';
import React, { useContext, useState } from 'react';
import { LoginModalState, defaultLoginModalState } from './';
import { Form, Input, Icon, ModalButton, Loading } from 'components';

export function LoginModal() {
  const sessionContext = useContext(SessionContext);
  const [state, setState] = useState<LoginModalState>(defaultLoginModalState);

  function setValue<T extends keyof LoginModalState>(key: T, value: LoginModalState[T]): void {
    setState({
      ...state,
      [key]: value,
    });
  }

  async function tryLogin(): Promise<void> {
    try {
      setValue('showSpinner', true);
      await sessionContext.login(state.username!, state.password!);
      redirect('home');
    } catch {
      toast.error('There was a problem with your username or password.');
      setValue('showSpinner', false);
    }
  }

  return (
    <ModalButton
      button="Login"
      className="text-white"
      header="Login to your account"
      style={{ background: 'transparent' }}
    >
      <Loading isLoading={state.showSpinner} text="Attempting to login...">
        <Form className="login-form" onSubmit={tryLogin}>
          <label className="username-input">
            <Input name="username" placeholder="Username" value={state.username} onChange={setValue} type="text" />
            <Icon type="user" />
          </label>
          <label className="password-input">
            <Input name="password" placeholder="Password" value={state.password} onChange={setValue} type="password" />
            <Icon type="lock" />
          </label>
          <button className="rounded-button blue plain" type="submit">
            Log In
          </button>
        </Form>
      </Loading>
    </ModalButton>
  );
}
