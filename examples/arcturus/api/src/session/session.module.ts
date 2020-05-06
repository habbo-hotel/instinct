import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { jwtExpires, jwtSecret } from '../config';
import { PassportModule } from '@nestjs/passport';
import { SessionService } from './session.service';
import { CommonModule } from '../common/common.module';
import { SessionController } from './session.controller';
import { BearerTokenService } from './bearer-token.service';
import { DatabaseModule } from '../database/database.module';
import { BearerTokenStrategy } from './bearer-token.strategy';

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
