import {Module} from '@nestjs/common';
import {AuthScopeGuard} from './auth-scope.guard';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [AuthScopeGuard],
  exports: [AuthScopeGuard],
})
export class AuthModule {}
