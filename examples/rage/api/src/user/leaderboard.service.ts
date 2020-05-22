import {Injectable} from '@nestjs/common';
import {SelectQueryBuilder} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity, UserRepository} from '../database/rage/user/user';

@Injectable()
export class UserLeaderBoardService {
  constructor(@InjectRepository(UserRepository) private readonly userRepo: UserRepository) {}

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
    return this.userRepo.createQueryBuilder('user').innerJoin('user.rank', 'rank', 'rank.websiteShowStaff = :showStaff', {
      showStaff: '0',
    });
  }
}
