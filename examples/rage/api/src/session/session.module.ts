import {JwtModule} from '@nestjs/jwt';
import {Module} from '@nestjs/common';
import {UserModule} from '../user/user.module';
import {PassportModule} from '@nestjs/passport';
import {SessionService} from './session.service';
import {CommonModule} from '../common/common.module';
import {SessionController} from './session.controller';
import {BearerTokenService} from './bearer-token.service';
import {DatabaseModule} from '../database/database.module';
import {BearerTokenStrategy} from './bearer-token.strategy';
import {authJwtExpires, authJwtSecret} from '../common/config';

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
  controllers: [SessionController],
  providers: [SessionService, BearerTokenService, BearerTokenStrategy],
  exports: [SessionService, BearerTokenService, BearerTokenStrategy],
})
export class SessionModule {
  constructor() {
    PassportModule.register({
      session: true,
    });
  }
}
