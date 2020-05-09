import { sessionService } from 'app/service';
import React, { PureComponent } from 'react';
import { exampleUser, User } from 'instinct-interfaces';
import { ClientEvent, clientService } from 'instinct-frontend';
import { SessionContext, SessionTypes, SessionProviderProps } from './';

export class SessionContextProvider extends PureComponent<SessionProviderProps> {
  setStore = (changes: Partial<SessionTypes>): void => {
    return this.setState(changes);
  };

  componentDidMount() {
    this.init();
    clientService.eventListener.on(ClientEvent.ENTERED_HOTEL, this.hasEnteredHotel);
  }

  init = async (): Promise<void> => {
    const user: User | undefined = await sessionService.init();

    if (user) {
      this.initSession(user);
    } else {
      this.logout();
    }
  };

  login = async (username: string, password: string): Promise<User> => {
    const authToken: string = await sessionService.attemptCredentials(username, password);
    const user: User = await sessionService.attemptBearerToken(authToken);
    this.initSession(user);
    return user;
  };

  logout = (): void => {
    sessionService.logout();
    this.setState({
      user: undefined,
      startedAt: undefined,
    });
  };

  initSession = (user: User): void => {
    this.setState({
      user,
      startedAt: new Date(),
    });
  };

  private hasEnteredHotel = () => {
    console.log('Hotel has been entered');
  };

  state: SessionTypes = {
    startedAt: undefined,
    user: exampleUser,
    setStore: this.setStore,
    login: this.login,
    logout: this.logout,
    forceStart: this.initSession,
  };

  render() {
    const { children } = this.props;
    return <SessionContext.Provider value={this.state}>{children}</SessionContext.Provider>;
  }
}
