import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RankEntity } from '../database/entity/rank';
import { MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class RankService {
  constructor(
    @InjectRepository(RankEntity)
    private readonly rankRepository: Repository<RankEntity>,
  ) {}

  private readonly eagerRelations: Array<keyof RankEntity> = ['users'];

  getAll(): Promise<RankEntity[]> {
    return this.rankRepository.find({
      relations: this.eagerRelations,
    });
  }

  getStaff(): Promise<RankEntity[]> {
    return this.rankRepository.find({
      where: {
        level: MoreThanOrEqual(5),
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
}
