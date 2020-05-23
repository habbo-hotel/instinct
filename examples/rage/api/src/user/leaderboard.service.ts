import {Injectable} from '@nestjs/common';
import {SelectQueryBuilder} from 'typeorm';
import {UserEntity} from '../database/rage/user/user/user.entity';
import {UserRepository} from '../database/rage/user/user/user.repository';

@Injectable()
export class UserLeaderBoardService {
  constructor(private readonly userRepo: UserRepository) {}

  getMostCredits(limit = 10): Promise<UserEntity[]> {
    return this.queryBuilder().orderBy('user.credits', 'DESC').limit(limit).getMany();
  }

  getMostPixels(limit = 10): Promise<UserEntity[]> {
    return this.queryBuilder().orderBy('user.pixels', 'DESC').limit(limit).getMany();
  }

  getMostPoints(limit = 10): Promise<UserEntity[]> {
    return this.queryBuilder().orderBy('user.points', 'DESC').limit(limit).getMany();
  }

  private queryBuilder(): SelectQueryBuilder<UserEntity> {
    return this.userRepo.createQueryBuilder('user');
  }
}
