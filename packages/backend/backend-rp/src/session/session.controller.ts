import {Controller, Get} from '@nestjs/common';
import {UserRPStats} from '@instinct-prj/interface-rp';
import {rpStatsWire, UserRPStatRepository} from '../database/user';
import {GetSession, HasSession, UserEntity} from '@instinct-prj/backend';

@Controller('session')
export class SessionController {
  constructor(private readonly rpStatsRepo: UserRPStatRepository) {}

  @Get('rp')
  @HasSession()
  async getSession(@GetSession() session: UserEntity): Promise<UserRPStats> {
    const userRPStats = await this.rpStatsRepo.findOneOrFail({
      userID: session.id!,
    });
    return rpStatsWire(userRPStats);
  }
}
