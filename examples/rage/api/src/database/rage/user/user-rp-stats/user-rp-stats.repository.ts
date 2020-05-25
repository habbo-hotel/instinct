import {Repository} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {UserRPStatsEntity} from './user-rp-stats.entity';

@Injectable()
export class UserRPStatsRepository{
  readonly eagerRelations: string[] = ['gang', 'gang.owner', 'gang.users', 'gang.users.user'];

  constructor(@InjectRepository(UserRPStatsEntity) private readonly userRPStatsRepo: Repository<UserRPStatsEntity>) { }

  findOneByIDOrFail(userID: number): Promise<UserRPStatsEntity> {
    return this.userRPStatsRepo.findOneOrFail({
      where: {
        userID,
      },
      relations: this.eagerRelations,
    })
  }

}
