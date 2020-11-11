import {Module} from '@nestjs/common';
import {RpProfileController} from './rp-profile.controller';
import {DatabaseModule} from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RpProfileController],
})
export class RPProfileModule {}
