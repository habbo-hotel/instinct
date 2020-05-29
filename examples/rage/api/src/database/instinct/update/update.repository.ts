import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UpdateEntity} from './update.entity';

@Injectable()
export class UpdateRepository {
  constructor(@InjectRepository(UpdateEntity) private readonly updateRepo: Repository<UpdateEntity>) {}

  readonly eagerRelations: string[] = ['user'];

  async create(update: UpdateEntity): Promise<UpdateEntity> {
    const newUpdate: UpdateEntity = await this.updateRepo.save(update);
    return this.findOneByIDOrFail(newUpdate.id!);
  }

  getAll(): Promise<UpdateEntity[]> {
    return this.updateRepo.find({
      relations: this.eagerRelations,
    });
  }

  findOneByIDOrFail(updateID: number): Promise<UpdateEntity> {
    return this.updateRepo.findOneOrFail({
      where: {
        id: updateID,
      },
      relations: this.eagerRelations,
    });
  }

  async updateOneByIDOrFail(updateID: number, changes: Partial<UpdateEntity>): Promise<UpdateEntity> {
    await this.updateRepo.update(updateID, changes);
    return this.findOneByIDOrFail(updateID);
  }

  async deleteOneByID(updateID: number): Promise<void> {
    await this.updateRepo.delete(updateID);
  }
}
