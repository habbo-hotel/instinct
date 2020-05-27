import { Business, BusinessJobApplication, User, UserStats } from 'instinct-rp-interfaces';

export interface SessionService {
  // Fetches user bearer token if it exists
  // Attempts to fetch user with the bearer token
  // Upon failure will logout and return undefined
  init(): Promise<User | undefined>;

  // Returns a bearer token upon success
  // Throws exception upon failure
  attemptCredentials(username: string, password: string): Promise<string>;

  // Returns an user upon success
  // Throws exception upon failure
  attemptBearerToken(authToken: string): Promise<User>;

  // Creates a SSO for client use
  // Throws exception upon failure
  createSSO(): Promise<string>;

  getCurrentUser(): Promise<User>;

  getMyStats(): Promise<UserStats>;

  getMyBusinesses(): Promise<Business[]>;

  getMyApplications(): Promise<BusinessJobApplication[]>;

  getApplicationByID(applicationID: number): Promise<BusinessJobApplication>;

  updatePassword(oldPassword: string, newPassword: string, newPasswordAgain: string): Promise<void>;

  updateProfile(youtube: string): Promise<void>;

  updateEmail(email: string, password: string): Promise<void>;


  // Removes the user's bearer token from localStorage
  logout(): void;
}
