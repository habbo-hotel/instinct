import {UserModule} from '../user';
import {JwtModule} from '@nestjs/jwt';
import {CommonModule} from '../common';
import {InstinctConfig} from '../config';
import {DatabaseModule} from '../database';
import {PassportModule} from '@nestjs/passport';
import {SessionService} from './session.service';
import {DynamicModule, Module} from '@nestjs/common';
import {SessionController} from './session.controller';
import {BearerTokenService} from './bearer-token.service';
import {BearerTokenStrategy} from './bearer-token.strategy';

@Module({})
export class SessionModule {
  constructor() {
    PassportModule.register({
      session: true,
    });
  }

  static forRoot(config: InstinctConfig): DynamicModule {
    return {
      module: SessionModule,
      imports: [
        UserModule,
        CommonModule,
        DatabaseModule,
        PassportModule,
        JwtModule.register({
          secret: config.jwtSecret,
          signOptions: {
            expiresIn: config.jwtExpires,
          },
        }),
      ],
      controllers: [SessionController],
      providers: [SessionService, BearerTokenService, BearerTokenStrategy],
      exports: [SessionService, BearerTokenService, BearerTokenStrategy],
    };
  }
}
