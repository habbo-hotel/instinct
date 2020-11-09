import {Module} from '@nestjs/common';
import {UserHighScoreModule} from './high-score/high-score.module';
import {RpStatsForNewUsersModule} from './rp-stats-for-new-users/rp-stats-for-new-users.module';

@Module({
  imports: [UserHighScoreModule, RpStatsForNewUsersModule],
  exports: [UserHighScoreModule, RpStatsForNewUsersModule],
})
export class FeatureModule {}
