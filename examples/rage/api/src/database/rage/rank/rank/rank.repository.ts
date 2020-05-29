import {Repository} from 'typeorm';
import {RankEntity} from './rank.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from '../../user/user/user.entity';

@Injectable()
export class RankRepository {
  readonly eagerRelations: string[] = ['users'];

  constructor(
    @InjectRepository(RankEntity)
    private readonly rankRepo: Repository<RankEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {}

  create(rank: RankEntity): Promise<RankEntity> {
    return this.rankRepo.save(rank);
  }

  getAll(): Promise<RankEntity[]> {
    return this.rankRepo.find({
      relations: this.eagerRelations,
    });
  }

  getAllStaff(): Promise<RankEntity[]> {
    return this.rankRepo.find({
      where: {},
      relations: this.eagerRelations,
    });
  }

  findOneByIDOrFail(rankID: number): Promise<RankEntity> {
    return this.rankRepo.findOneOrFail({
      where: {
        id: rankID,
      },
      relations: this.eagerRelations,
    });
  }

  async deleteByID(rankID: number): Promise<void> {
    await this.reassignUsersFromRank(rankID);
    await this.rankRepo.delete(rankID);
  }

  private async reassignUsersFromRank(rankID: number): Promise<void> {
    await this.userRepo.createQueryBuilder().update().set({rankID: 1}).where('rankID = :rankID', {rankID}).execute();
  }
}
