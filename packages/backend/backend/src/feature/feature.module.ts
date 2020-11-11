import {Module} from '@nestjs/common';
import {ForgotPasswordModule} from './forgot-password';
import {UserGuestbookModule} from './user-guestbook/user-guestbook.module';

@Module({
  imports: [ForgotPasswordModule, UserGuestbookModule],
  exports: [ForgotPasswordModule, UserGuestbookModule],
})
export class FeatureModule {}
