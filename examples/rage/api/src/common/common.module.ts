import {Module} from '@nestjs/common';
import {HashService} from './hash.service';
import {OneTimeCodeService} from './one-time-code.service';

@Module({
  providers: [HashService, OneTimeCodeService],
  exports: [HashService, OneTimeCodeService],
})
export class CommonModule {}
