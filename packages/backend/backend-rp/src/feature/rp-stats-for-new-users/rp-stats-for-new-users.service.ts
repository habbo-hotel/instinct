import {Injectable} from '@nestjs/common';
import {UserEntity, UserRepository} from '@instinct-prj/backend';
import {UserRPStatRepository} from '../../database/user/rp-stats.repository';

@Injectable()
export class CreateRPStatsForNewUsersService {
  constructor(
    userRepo: UserRepository,
    private readonly rpStatsRepo: UserRPStatRepository
  ) {
    userRepo.eventEmitter.on('OBJECT_CREATED', this.onUserCreated);
  }

  onUserCreated = async (user: UserEntity): Promise<void> => {
    await this.rpStatsRepo.create({
      id: undefined,
      userID: user.id!,
      lastRoomX: 0,
      lastRoomY: 0,
      lastRoomZ: 0,
      lastRoomR: 0,
      currentHealth: 100,
      maxHealth: 100,
      currentEnergy: 100,
      maxEnergy: 100,
      isDead: 0,
      isWorking: 0,
      deathTime: 0,
      shiftTime: 0,
      businessID: 0,
      businessPositionID: 0,
      gangID: 0,
      gangRankID: 0,
    });
  };
}
