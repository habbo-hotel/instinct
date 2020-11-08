import {Controller, Get} from '@nestjs/common';
import {RPUser} from '@instinct-prj/interface-rp';
import {rpStatsWire, UserRPStatRepository} from '../database/user';
import {
  GetSession,
  HasSession,
  UserEntity,
  userWire,
} from '@instinct-prj/backend';

@Controller('session')
export class SessionController {
  constructor(private readonly rpStatsRepo: UserRPStatRepository) {}

  @Get('rp')
  @HasSession()
  async getSession(@GetSession() session: UserEntity): Promise<RPUser> {
    const userRPStats = await this.rpStatsRepo.findOneOrFail({
      userID: session.id!,
    });
    return {
      ...userWire(session),
      rpStats: rpStatsWire(userRPStats),
    };
  }
}
