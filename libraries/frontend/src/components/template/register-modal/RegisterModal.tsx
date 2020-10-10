import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { sessionContext } from 'context';
import ReCAPTCHA from 'react-google-recaptcha';
import React, { useContext, useState } from 'react';
import { sessionService, userService } from 'services';
import { RegisterModalState, defaultRegisterModalState } from './';
import { Form, Input, Icon, ModalButton, Loading } from 'components';

export function RegisterModal() {
  const [location, setLocation] = useLocation();
  const [state, setState] = useState<RegisterModalState>(defaultRegisterModalState);
  const { setUser } = useContext(sessionContext);

  console.log(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY);

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
      await userService.create(state.username, state.password, state.email, state.captcha);
      const bearer = await sessionService.attemptCredentials(state.username, state.password);
      const user = await sessionService.attemptBearerToken(bearer);
      await setUser(user);
      setLocation('/home');
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
          <div className="row mt-2 mb-2">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY!}
              onChange={(x) => setValue('captcha', x as string)}
            />
          </div>
          <button className="rounded-button blue plain" disabled={disabled} type="submit">
            Create Account
          </button>
        </Form>
      </Loading>
    </ModalButton>
  );
}
