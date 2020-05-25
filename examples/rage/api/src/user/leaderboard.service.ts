import {Injectable} from '@nestjs/common';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';

@Injectable()
export class UserLeaderBoardService {
  constructor(private readonly userRepo: UserRepository) {}

  getMostCredits(limit = 10): Promise<UserEntity[]> {
    return this.userRepo.getQueryBuilder().orderBy('user.credits', 'DESC').limit(limit).getMany();
  }

  getMostPixels(limit = 10): Promise<UserEntity[]> {
    return this.userRepo.getQueryBuilder().orderBy('user.pixels', 'DESC').limit(limit).getMany();
  }

  getMostPoints(limit = 10): Promise<UserEntity[]> {
    return this.userRepo.getQueryBuilder().orderBy('user.points', 'DESC').limit(limit).getMany();
  }
}
