import {UserModule} from '../user';
import {JwtModule} from '@nestjs/jwt';
import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {PassportModule} from '@nestjs/passport';
import {SessionService} from './session.service';
import {SessionController} from './session.controller';
import {BearerTokenService} from './bearer-token.service';
import {BearerTokenStrategy} from './bearer-token.strategy';
import {CommonModule, jwtExpires, jwtSecret} from '../common';

@Module({
  imports: [
    UserModule,
    CommonModule,
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: {
        expiresIn: jwtExpires,
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
