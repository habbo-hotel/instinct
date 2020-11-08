import {Module} from '@nestjs/common';
import {CerberusController} from './cerberus.controller';

@Module({
  controllers: [CerberusController],
})
export class CerberusModule {}
