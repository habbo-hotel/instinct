import {Module} from '@nestjs/common';
import {DatabaseModule} from '../../database/database.module';
import {CreateRPStatsForNewUsersService} from './rp-stats-for-new-users.service';

@Module({
  imports: [DatabaseModule],
  providers: [CreateRPStatsForNewUsersService],
})
export class RpStatsForNewUsersModule {}
