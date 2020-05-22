import {Module} from '@nestjs/common';
import {ConfigModule} from '../config';
import {GoogleRecaptchaService} from './recaptcha.service';

@Module({
  imports: [ConfigModule],
  providers: [GoogleRecaptchaService],
  exports: [GoogleRecaptchaService],
})
export class GoogleModule {}
