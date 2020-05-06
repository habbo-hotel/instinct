import { backendAPI } from 'api';
import { SessionTypes } from './';
import { AxiosResponse } from 'axios';
import { User } from 'instinct-interfaces';
import { localStorageService } from 'service';

class SessionService implements SessionTypes {
  readonly localStorageKey = 'session';

  async init(): Promise<User | undefined> {
    try {
      const authToken: string = localStorageService.get(this.localStorageKey);
      return await this.attemptBearerToken(authToken);
    } catch {
      return undefined;
    }
  }

  async attemptCredentials(username: string, password: string): Promise<string> {
    const bearerToken: AxiosResponse<string> = await backendAPI.post('session', { username, password });
    return bearerToken.data;
  }

  async attemptBearerToken(bearerToken: string): Promise<User> {
    try {
      this.setBearerToken(bearerToken);
      const session: AxiosResponse<User> = await backendAPI.get('session');
      return session.data;
    } catch {
      setAPIToken();
      throw new Error('Invalid bearer token');
    }
  }

  setBearerToken(bearerToken: string): void {
    setAPIToken(bearerToken);

    return bearerToken !== undefined
      ? localStorageService.set(this.localStorageKey, bearerToken)
      : localStorageService.delete(this.localStorageKey);
  }

  async createSSO(): Promise<string> {
    const sso: AxiosResponse<string> = await backendAPI.post('session/sso');
    return sso.data;
  }

  async getCurrentUser(): Promise<User> {
    const user: AxiosResponse<User> = await backendAPI.get('session');
    return user.data;
  }

  logout(): void {
    localStorageService.delete(this.localStorageKey);
  }
}

export const sessionService: SessionTypes = new SessionService();
