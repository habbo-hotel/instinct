import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {GoogleRecaptchaService} from './recaptcha.service';

@Module({
  imports: [DatabaseModule],
  providers: [GoogleRecaptchaService],
  exports: [GoogleRecaptchaService],
})
export class GoogleModule {}
