import {BusinessEntity} from './business.entity';
import { EntityRepository, Like, Repository } from 'typeorm';

@EntityRepository(BusinessEntity)
export class BusinessRepository extends Repository<BusinessEntity> {
  readonly eagerRelations: string[] = ['employees', 'owner', 'positions'];

  getAll(): Promise<BusinessEntity[]> {
    return this.find({
      relations: this.eagerRelations,
    });
  }

  findOneByIDOrFail(businessID: number): Promise<BusinessEntity> {
    return this.findOneOrFail({
      where: {
        id: businessID,
      },
      relations: this.eagerRelations,
    })
  }

  searchByField<T extends keyof BusinessEntity>(field: T, value: BusinessEntity[T]): Promise<BusinessEntity[]> {
    return this.find({
      where: {
        [field]: Like(`%${value}%`),
      },
      relations: this.eagerRelations,
    });
  }

}
