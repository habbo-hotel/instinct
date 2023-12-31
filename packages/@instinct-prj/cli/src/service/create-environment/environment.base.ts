import {EnvironmentContent} from './create-environment.types';

export function createEnvironmentContent(environment: EnvironmentContent) {
  return `
    # HTTP
    PORT=3000
    
    # Database
    DATABASE_HOST=${environment.databaseHost}
    DATABASE_USER=${environment.databaseUsername}
    DATABASE_PASS=${environment.databasePassword}
    DATABASE_NAME=${environment.databaseHost}
    
    # Authentication
    JWT_SECRET=${environment.jwtSecret}
    JWT_EXPIRES=${environment.jwtExpiresIn}
    PASSWORD_HASH=${environment.passwordHash}
    
    # Security
    MAX_ACCOUNTS_PER_IP=3
    
    # Defaults - User
    DEFAULT_USER_RANK=1
    DEFAULT_USER_MOTTO=I am a test!
    DEFAULT_USER_LOOK=ea-1403-63.ch-3077-1325-110.hr-125-61.lg-285-89.fa-1201-0.sh-3027-110-1408.hd-3103-1.he-8394-110.wa-2009-1325
    DEFAULT_USER_CREDITS=100
    DEFAULT_USER_PIXELS=1000
    DEFAULT_USER_POINTS=10
    DEFAULT_USER_HOME_ROOM=0
  `;
}
