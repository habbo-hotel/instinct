export interface InstinctConfig {
  // Database
  databaseHost: string;
  databasePort: number;
  databaseUser: string;
  databasePass: string;
  databaseName: string;

  // JWT
  jwtSecret: string;
  jwtExpires: number;

  // Public Folder
  publicFolder: string;

  // Default User
  defaultUserMotto: string;
  defaultUserRank: number;
  defaultUserLook: string;
  defaultUserCredits: number;
  defaultUserPixels: number;
  defaultUserPoints: number;
  defaultUserHomeRoom: number;
}
