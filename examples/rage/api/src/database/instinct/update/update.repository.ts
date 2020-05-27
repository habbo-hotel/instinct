import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {UpdateEntity} from './update.entity';

@Injectable()
export class UpdateRepository {
  constructor(@InjectRepository(UpdateEntity) private readonly updateRepo: Repository<UpdateEntity>) {}

  readonly eagerRelations: string[] = ['user'];

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
}
