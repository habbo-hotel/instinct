import { Business, BusinessJobApplication, User } from 'instinct-rp-interfaces';

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

  getMyBusinesses(): Promise<Business[]>;

  getMyApplications(): Promise<BusinessJobApplication[]>;

  // Removes the user's bearer token from localStorage
  logout(): void;
}
