import { SessionService } from './';
import { AxiosResponse } from 'axios';
import { User } from 'instinct-interfaces';
import { backendAPI, setAPIToken } from 'api';
import { localStorageService } from 'services';

class SessionServiceImplementation implements SessionService {
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
    try {
      const user: AxiosResponse<User> = await backendAPI.get('session');
      return user.data;
    } catch {
      throw new Error('Not Authenticated');
    }
  }

  logout(): void {
    localStorageService.delete(this.localStorageKey);
  }

  async updateEmail(currentPassword: string, newEmail: string): Promise<void> {
    await backendAPI.post('session/settings/email', {
      password: currentPassword,
      email: newEmail,
    });
  }

  async updatePassword(currentPassword: string, newPassword: string, newPasswordAgain: string): Promise<void> {
    await backendAPI.post('session/settings/password', {
      oldPassword: currentPassword,
      newPassword,
      newPasswordAgain,
    });
  }

  async generateForgotPasswordToken(email: string): Promise<void> {
    await backendAPI.post(`session/forgot-password?email=${email}`);
  }

  async redeemForgotPasswordToken(token: string, newPassword: string, newPasswordAgain: string): Promise<void> {
    await backendAPI.post('session/forgot-password/redeem', {
      token,
      password: newPassword,
      passwordAgain: newPasswordAgain,
    });
  }
}

export const sessionService: SessionService = new SessionServiceImplementation();
