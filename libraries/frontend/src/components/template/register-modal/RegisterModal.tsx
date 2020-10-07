import { redirect } from 'components';
import { toast } from 'react-toastify';
import { userService } from 'services';
import { sessionContext } from 'context';
import { User } from 'instinct-interfaces';
import React, { useContext, useState } from 'react';
import { RegisterModalState, defaultRegisterModalState } from './';
import { Form, Input, Icon, ModalButton, Loading } from 'components';

export function RegisterModal() {
  const [state, setState] = useState<RegisterModalState>(defaultRegisterModalState);
  const sessionContext = useContext(sessionContext);

  const disabled: boolean =
    state.username === '' || state.password === '' || state.email === '' || state.password !== state.passwordAgain;

  function setValue<T extends keyof RegisterModalState>(key: T, value: RegisterModalState[T]): void {
    setState({
      ...state,
      [key]: value,
    });
  }

  async function tryRegister(): Promise<void> {
    try {
      setValue('showSpinner', true);
      const newUser: User = await userService.create(state.username, state.password, state.email);
      await sessionContext.forceStart!(newUser);
      redirect('home');
    } catch {
      toast.error('There was a problem creating your account.');
      setValue('showSpinner', false);
    }
  }

  return (
    <ModalButton button="Register" className="mr-2" header="Create an Account">
      <Loading isLoading={state.showSpinner} text="Creating your account...">
        <Form className="login-form" onSubmit={tryRegister}>
          <label className="username-input">
            <Input name="username" placeholder="Username" value={state.username} onChange={setValue} type="text" />
            <Icon type="user" />
          </label>
          <label className="username-input">
            <Input name="email" placeholder="Email" value={state.email} onChange={setValue} type="email" />
            <Icon type="envelope" />
          </label>
          <label className="password-input">
            <Input name="password" placeholder="Password" value={state.password} onChange={setValue} type="password" />
            <Icon type="lock" />
          </label>
          <label className="password-input">
            <Input
              name="passwordAgain"
              placeholder="Password Again"
              value={state.passwordAgain}
              onChange={setValue}
              type="password"
            />
            <Icon type="lock" />
          </label>
          <button className="rounded-button blue plain" disabled={disabled} type="submit">
            Create Account
          </button>
        </Form>
      </Loading>
    </ModalButton>
  );
}
