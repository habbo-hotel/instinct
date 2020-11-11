import {Module} from '@nestjs/common';
import {RPProfileModule} from './rp-profile';
import {UserHighScoreModule} from './high-score/high-score.module';
import {RpStatsForNewUsersModule} from './rp-stats-for-new-users/rp-stats-for-new-users.module';

@Module({
  imports: [UserHighScoreModule, RPProfileModule, RpStatsForNewUsersModule],
  exports: [UserHighScoreModule, RPProfileModule, RpStatsForNewUsersModule],
})
export class FeatureModule {}
