import { sessionService } from 'app/service';
import React, { PureComponent } from 'react';
import { ClientEvent, clientService } from 'instinct-frontend';
import {exampleUser, exampleUserSession, UserSession} from 'instinct-rp-interfaces';
import { SessionContext, SessionTypes, SessionProviderProps } from './';

export class SessionContextProvider extends PureComponent<SessionProviderProps> {

  setStore = (changes: Partial<SessionTypes>): void => {
    return this.setState(changes);
  };

  componentDidMount() {
    this.init();
    clientService.eventListener.on(ClientEvent.ENTERED_HOTEL, this.hasEnteredHotel);
  }

  init = async () => {
    const session: UserSession | undefined = await sessionService.init();

    if (session) {
      this.initSession(session);
    } else {
      this.logout();
    }
  };

  login = async (username: string, password: string) => {
    const authToken: string = await sessionService.attemptCredentials(username, password);
    const session: UserSession = await sessionService.attemptBearerToken(authToken);
    this.initSession(session);
    return session;
  };

  logout = () => {
    sessionService.logout();
    this.setState({
      user: undefined,
      startedAt: undefined,
    });
  };

  initSession = (session: UserSession): void => {
    this.setState({
      session,
      startedAt: new Date(),
    });
  };

  refresh = async () => {
    const session: UserSession = await sessionService.getCurrentSession();
    this.setState({
      ...this.state,
      session,
    });
  }

  private hasEnteredHotel = () => {
    console.log('Hotel has been entered');
  };

  state: SessionTypes = {
    startedAt: undefined,
    session: undefined,
    setStore: this.setStore,
    login: this.login,
    logout: this.logout,
    forceStart: this.initSession,
    refresh: this.refresh,
  };

  render() {
    const { children } = this.props;
    return <SessionContext.Provider value={this.state}>{children}</SessionContext.Provider>;
  }
}
