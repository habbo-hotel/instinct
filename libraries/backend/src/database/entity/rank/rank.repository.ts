import {Repository} from 'typeorm';
import {RankEntity} from './rank.entity';
import {Injectable} from '@nestjs/common';
import {PermissionStatus} from './rank.types';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class RankRepository {
  constructor(@InjectRepository(RankEntity) private readonly rankRepository: Repository<RankEntity>) {}

  private readonly eagerRelations: Array<keyof RankEntity> = ['users'];

  async create(rank: RankEntity): Promise<RankEntity> {
    return this.rankRepository.save(rank);
  }

  getAll(): Promise<RankEntity[]> {
    return this.rankRepository.find({
      relations: this.eagerRelations,
    });
  }

  getStaff(): Promise<RankEntity[]> {
    return this.rankRepository.find({
      where: {
        websiteShowStaff: PermissionStatus.Enabled,
      },
      relations: this.eagerRelations,
    });
  }

  getByID(rankID: number): Promise<RankEntity> {
    return this.rankRepository.findOneOrFail({
      where: {
        id: rankID,
      },
      relations: this.eagerRelations,
    });
  }

  async updateByID(rankID: number, changes: Partial<RankEntity>): Promise<void> {
    await this.rankRepository.update(rankID, changes);
  }

  async deleteByID(rankID: number): Promise<void> {
    await this.rankRepository.delete(rankID);
  }
}
