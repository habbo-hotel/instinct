import {Module} from '@nestjs/common';
import { DatabaseModule } from '../database';
import {HealthController} from './health.controller';
import { ServerStatusService } from './server-status.service';

@Module({
  imports: [DatabaseModule],
  controllers: [HealthController],
  providers: [ServerStatusService],
  exports: [ServerStatusService],
})
export class HealthModule {}
