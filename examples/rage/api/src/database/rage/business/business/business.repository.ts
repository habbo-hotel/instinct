import {Like, Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BusinessEntity} from './business.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class BusinessRepository {
  readonly eagerRelations: string[] = ['employees', 'owner', 'positions'];

  constructor(@InjectRepository(BusinessEntity) private readonly businessRepo: Repository<BusinessEntity>) {}

  async create(business: BusinessEntity): Promise<BusinessEntity> {
    const newBusiness: BusinessEntity = await this.businessRepo.save(business);
    return this.findOneByIDOrFail(newBusiness.id!);
  }

  getAll(): Promise<BusinessEntity[]> {
    return this.businessRepo.find({
      where: {
        hidden: 0,
      },
      relations: this.eagerRelations,
    });
  }


  findManyWhere<T extends keyof BusinessEntity>(field: T, value: BusinessEntity[T]): Promise<BusinessEntity[]> {
    return this.businessRepo.find({
      where: {
        [field]: value,
        hidden: 0,
      },
      relations: this.eagerRelations,
    });
  }

  findOneByIDOrFail(businessID: number): Promise<BusinessEntity> {
    return this.businessRepo.findOneOrFail({
      where: {
        id: businessID,
      },
      relations: this.eagerRelations,
    });
  }

  async updateOneByIDOrFail(businessID: number, changes: Partial<BusinessEntity>): Promise<BusinessEntity> {
    await this.businessRepo.update(businessID, changes);
    return this.findOneByIDOrFail(businessID);
  }

  searchByField<T extends keyof BusinessEntity>(field: T, value: BusinessEntity[T]): Promise<BusinessEntity[]> {
    return this.businessRepo.find({
      where: {
        [field]: Like(`%${value}%`),
        hidden: 0,
      },
      relations: this.eagerRelations,
    });
  }

  async deleteOneByID(businessID: number): Promise<void> {
    await this.businessRepo.delete(businessID);
  }
}
