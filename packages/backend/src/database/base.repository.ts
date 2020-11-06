import {Inject} from '@nestjs/common';
import {getRepositoryToken} from '@nestjs/typeorm';
import {EntityTarget, FindConditions, Repository} from 'typeorm';

export abstract class BaseRepository<Entity> {
  readonly repo: Repository<Entity>;

  constructor(entity: EntityTarget<Entity>, readonly eagerRelations: string[]) {
    this.repo = Inject(getRepositoryToken(entity as any, 'default')) as any;
  }

  async create(newEntity: Entity): Promise<Entity> {
    const newObject = await this.repo.save(newEntity);

    // @ts-ignore
    if (!newObject.id) {
      throw new Error('Entity missing `id`');
    }
    // @ts-ignore It's expected for entities to have an `id`
    return this.findOneOrFail(newObject.id!);
  }

  find(conditions?: FindConditions<Entity>): Promise<Entity[]> {
    return this.repo.find({
      where: conditions,
      relations: this.eagerRelations,
    });
  }

  findOne(conditions?: FindConditions<Entity>): Promise<Entity | undefined> {
    return this.repo.findOne({
      where: conditions,
      relations: this.eagerRelations,
    });
  }

  findOneOrFail(conditions?: FindConditions<Entity>): Promise<Entity> {
    return this.repo.findOneOrFail({
      where: conditions,
      relations: this.eagerRelations,
    });
  }

  async update(
    conditions: FindConditions<Entity>,
    changes: Partial<Entity>
  ): Promise<void> {
    await this.repo.update(conditions, changes as any);
  }

  async delete(conditions: FindConditions<Entity>): Promise<void> {
    await this.repo.delete(conditions);
  }
}
