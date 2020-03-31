import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RankEntity } from '../database/entity/rank';

@Injectable()
export class RankService {
  constructor(
    @InjectRepository(RankEntity)
    private readonly rankRepository: Repository<RankEntity>,
  ) {}

  private readonly eagerRelations: Array<keyof RankEntity> = [];

  async getAll(): Promise<RankEntity[]> {
    return this.rankRepository.find({
      relations: this.eagerRelations,
    });
  }

  async getByID(rankID: number): Promise<RankEntity> {
    return this.rankRepository.findOneOrFail({
      where: {
        id: rankID,
      },
      relations: this.eagerRelations,
    });
  }
}
