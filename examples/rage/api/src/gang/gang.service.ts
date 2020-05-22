import {Like, Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {GangEntity} from '../database/entity/gang';

@Injectable()
export class GangService {
  readonly relations: Array<keyof GangEntity> = ['owner'];

  constructor(@InjectRepository(GangEntity) private readonly gangRepo: Repository<GangEntity>) {}

  getAll(): Promise<GangEntity[]> {
    return this.gangRepo.find({
      relations: this.relations,
    });
  }

  getTop(): Promise<GangEntity[]> {
    return this.gangRepo.find({
      order: {
        kills: 'DESC',
      },
      take: 5,
      relations: this.relations,
    });
  }

  getByID(gangID: number): Promise<GangEntity> {
    return this.gangRepo.findOneOrFail({
      where: {
        id: gangID,
      },
      relations: [...this.relations, 'users'],
    });
  }

  searchByField<T extends keyof GangEntity>(field: T, value: GangEntity[T]): Promise<GangEntity[]> {
    return this.gangRepo.find({
      where: {
        [field]: Like(`%${value}%`),
      },
      relations: this.relations,
    });
  }
}
