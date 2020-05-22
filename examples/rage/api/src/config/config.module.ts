import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {ConfigService} from './config.service';
import {ConfigController} from './config.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ConfigController],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
