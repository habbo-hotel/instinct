import { SessionService } from './';
import { AxiosResponse } from 'axios';
import { backendAPI, setAPIToken, localStorageService } from 'instinct-frontend';
import {Business, BusinessJobApplication, User, UserSession, UserStats} from 'instinct-rp-interfaces';

class SessionServiceImplementation implements SessionService {
  readonly localStorageKey = 'session';

  async init() {
    try {
      const authToken: string = localStorageService.get(this.localStorageKey);
      return await this.attemptBearerToken(authToken);
    } catch {
      return undefined;
    }
  }

  // Throws 'AuthError'
  async attemptCredentials(username: string, password: string) {
    try {
      const bearerToken: AxiosResponse<string> = await backendAPI.post('session', { username, password });
      return bearerToken.data;
    } catch (e) {

      if (e?.response?.data?.type !== undefined) {
        throw {
          type: e.response.data.type,
          data: e.response.data.data,
        }
      }

      throw e;
    }
  }

  async attemptBearerToken(bearerToken: string) {
    try {
      this.setBearerToken(bearerToken);
      const session: AxiosResponse<UserSession> = await backendAPI.get('session');
      return session.data;
    } catch {
      setAPIToken();
      throw new Error('Invalid bearer token');
    }
  }

  async enableTwoFactor() {
    await backendAPI.patch('session/settings/two_factor');
  }

  setBearerToken(bearerToken: string) {
    setAPIToken(bearerToken);

    return bearerToken !== undefined
      ? localStorageService.set(this.localStorageKey, bearerToken)
      : localStorageService.delete(this.localStorageKey);
  }

  async createSSO() {
    const sso: AxiosResponse<string> = await backendAPI.post('session/sso');
    return sso.data;
  }

  async getCurrentSession() {
    const session: AxiosResponse<UserSession> = await backendAPI.get('session');
    return session.data;
  }

  async getMyTwoFactorQrCode() {
    const twoFactor: AxiosResponse<string> = await backendAPI.get('session/two_factor/qr');
    return twoFactor.data;
  }

  async getMyStats() {
    const rpStats: AxiosResponse<UserStats> = await backendAPI.get('session/stats');
    return rpStats.data;
  }

  async getMyBusinesses() {
    const businesses: AxiosResponse<Business[]> = await backendAPI.get('session/businesses');
    return businesses.data;
  }

  async getMyApplications() {
    const applications: AxiosResponse<BusinessJobApplication[]> = await backendAPI.get('session/applications');
    return applications.data;
  }

  async getApplicationByID(applicationID: number): Promise<BusinessJobApplication> {
    const jobApplication: AxiosResponse<BusinessJobApplication> = await backendAPI.get(`session/applications/${applicationID}`);
    return jobApplication.data;
  }

  async updateProfile(youtube: string) {
    await backendAPI.patch('session/settings/profile', {
      youtube,
    });
  }

  async updatePassword(oldPassword: string, newPassword: string, newPasswordAgain: string) {
    await backendAPI.patch('session/settings/password', {
      oldPassword,
      newPassword,
      newPasswordAgain,
    });
  }

  async updateEmail(email: string, password: string) {
    await backendAPI.patch('session/settings/email', {
      email,
      password,
    });
  }

  logout() {
    localStorageService.delete(this.localStorageKey);
  }
}

export const sessionService: SessionService = new SessionServiceImplementation();
