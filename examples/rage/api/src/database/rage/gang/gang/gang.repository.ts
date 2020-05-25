import {GangEntity} from './gang.entity';
import {EntityRepository, Like, Repository} from 'typeorm';

@EntityRepository(GangEntity)
export class GangRepository extends Repository<GangEntity> {
  readonly eagerRelations: string[] = ['owner', 'users'];

  getAll(): Promise<GangEntity[]> {
    return this.find({
      relations: this.eagerRelations,
    });
  }

  getMostKills(): Promise<GangEntity[]> {
    return this.find({
      order: {
        kills: 'DESC',
      },
      take: 5,
      relations: this.eagerRelations,
    });
  }

  getMostDeaths(): Promise<GangEntity[]> {
    return this.find({
      order: {
        deaths: 'DESC',
      },
      take: 5,
      relations: this.eagerRelations,
    });
  }

  findOneByIDOrFail(gangID: number): Promise<GangEntity> {
    return this.findOneOrFail({
      where: {
        id: gangID,
      },
      relations: this.eagerRelations,
    });
  }

  searchByField<T extends keyof GangEntity>(field: T, value: GangEntity[T]): Promise<GangEntity[]> {
    return this.find({
      where: {
        [field]: Like(`%${value}%`),
      },
      relations: this.eagerRelations,
    });
  }
}
