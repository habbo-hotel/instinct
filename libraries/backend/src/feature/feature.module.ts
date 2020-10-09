import {Module} from '@nestjs/common';
import {ForgotPasswordModule} from './forgot-password';

@Module({
  imports: [ForgotPasswordModule],
  exports: [ForgotPasswordModule],
})
export class FeatureModule {}
