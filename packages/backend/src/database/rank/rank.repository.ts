import {RankEntity} from './rank.entity';
import {Injectable} from '@nestjs/common';
import {PermissionStatus} from './rank.types';
import {BaseRepository} from '../base.repository';

@Injectable()
export class RankRepository extends BaseRepository<RankEntity> {
  constructor() {
    super(RankEntity, ['users']);
  }

  async create(rank: RankEntity): Promise<RankEntity> {
    const newRank = await super.create(rank);
    return this.findOneOrFail({id: newRank.id!});
  }

  getAll(): Promise<RankEntity[]> {
    return this.find({});
  }

  getStaff(): Promise<RankEntity[]> {
    return this.repo.find({
      where: {
        websiteShowStaff: PermissionStatus.Enabled,
      },
      order: {
        id: 'DESC',
      },
      relations: this.eagerRelations,
    });
  }
}
