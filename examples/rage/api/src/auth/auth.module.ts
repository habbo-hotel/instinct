import {Module} from '@nestjs/common';
import {AuthGuard} from './auth.guard';
import {DatabaseModule} from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
