import 'dotenv/config';
import { join } from 'path';
import { InstinctConfig } from '../backend/src/config';

function getEnvOrFail(key: string): string {
  const value: string | undefined = process.env[key];

  if (value === undefined) {
    throw new Error(`ENV Variable ${key} is missing`);
  }

  return value;
}

export const exampleInstinctConfig: InstinctConfig = {
  databaseHost: getEnvOrFail('DATABASE_HOST'),
  databasePort: Number(getEnvOrFail('DATABASE_PORT')),
  databaseUser: getEnvOrFail('DATABASE_USER'),
  databasePass: getEnvOrFail('DATABASE_PASS'),
  databaseName: getEnvOrFail('DATABASE_NAME'),

  jwtSecret: getEnvOrFail('JWT_SECRET'),
  jwtExpires: Number(getEnvOrFail('JWT_EXPIRES')),

  publicFolder: join(__dirname, 'public'),

  defaultUserRank: Number(getEnvOrFail('DEFAULT_USER_RANK')),
  defaultUserMotto: getEnvOrFail('DEFAULT_USER_MOTTO'),
  defaultUserLook: getEnvOrFail('DEFAULT_USER_LOOK'),
  defaultUserCredits: Number(getEnvOrFail('DEFAULT_USER_CREDITS')),
  defaultUserPixels: Number(getEnvOrFail('DEFAULT_USER_PIXELS')),
  defaultUserPoints: Number(getEnvOrFail('DEFAULT_USER_POINTS')),
  defaultUserHomeRoom: Number(getEnvOrFail('DEFAULT_USER_HOME_ROOM')),
}