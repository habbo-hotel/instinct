import {JwtModule} from '@nestjs/jwt';
import {Module} from '@nestjs/common';
import {UserModule} from '../user/user.module';
import {PassportModule} from '@nestjs/passport';
import {CommonModule} from '../common/common.module';
import {SessionGuard} from './session/session.guard';
import {SessionService} from './session/session.service';
import {DatabaseModule} from '../database/database.module';
import {authJwtExpires, authJwtSecret} from '../common/config';
import {SessionController} from './session/session.controller';
import {BearerTokenService} from './bearer-token/bearer-token.service';
import {BearerTokenStrategy} from './bearer-token/bearer-token.strategy';
import {TwoFactorAuthService} from './two-factor-auth/two-factor-auth.service';
import {SessionTwoFactorAuthController} from './two-factor-auth/two-factor-auth.controller';

@Module({
  imports: [
    UserModule,
    CommonModule,
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: authJwtSecret,
      signOptions: {
        expiresIn: authJwtExpires,
      },
    }),
  ],
  controllers: [SessionController, SessionTwoFactorAuthController],
  providers: [SessionService, BearerTokenService, BearerTokenStrategy, SessionGuard, TwoFactorAuthService],
  exports: [SessionService, BearerTokenService, BearerTokenStrategy, SessionGuard, TwoFactorAuthService],
})
export class SessionModule {
  constructor() {
    PassportModule.register({
      session: true,
    });
  }
}
