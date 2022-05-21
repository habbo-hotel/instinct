import {Module} from '@nestjs/common';
import {AWSS3Service} from './aws-s3.service';
import {DatabaseModule} from '@instinct-api/database';

@Module({
  imports: [DatabaseModule],
  providers: [AWSS3Service],
  exports: [AWSS3Service],
})
export class AWSModule {}
