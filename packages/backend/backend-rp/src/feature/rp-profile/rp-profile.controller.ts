import {UserRepository} from '@instinct-prj/backend';
import {UserRPStats} from '@instinct-prj/interface-rp';
import {rpStatsWire, UserRPStatRepository} from '../../database/user';
import {Controller, Get, Param, NotFoundException} from '@nestjs/common';

@Controller('users/profile/:username/rp')
export class RpProfileController {
  constructor(
    private readonly rpStats: UserRPStatRepository,
    private readonly user: UserRepository
  ) {}

  @Get()
  async getProfile(@Param('username') username: string): Promise<UserRPStats> {
    const user = await this.user.findOne({username});

    if (!user) {
      throw new NotFoundException();
    }

    const rpStats = await this.rpStats.findOneOrFail({userID: user.id!});

    return rpStatsWire(rpStats);
  }
}
