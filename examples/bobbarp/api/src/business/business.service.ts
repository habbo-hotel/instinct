import {Like, Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BusinessEntity} from '../database/entity/business';

@Injectable()
export class BusinessService {
  readonly eagerRelations: string[] = ['user', 'room', 'room.owner', 'members', 'members.user'];

  constructor(
    @InjectRepository(BusinessEntity)
    private readonly businessRepo: Repository<BusinessEntity>
  ) {}

  getAll(): Promise<BusinessEntity[]> {
    return this.businessRepo.find({
      relations: this.eagerRelations,
    });
  }

  getByID(groupID: number): Promise<BusinessEntity> {
    return this.businessRepo.findOneOrFail({
      where: {
        id: groupID,
      },
      relations: this.eagerRelations,
    });
  }

  searchByField<T extends keyof BusinessEntity>(field: T, value: BusinessEntity[T]): Promise<BusinessEntity[]> {
    return this.businessRepo.find({
      where: {
        [field]: Like(`%${value}%`),
      },
      relations: this.eagerRelations,
    });
  }
}
