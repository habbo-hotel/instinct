import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Like, MoreThan, Repository } from 'typeorm';
import { BusinessEntity, BusinessJobEntity } from '../database/entity/business';

@Injectable()
export class BusinessService {
  readonly eagerRelations: string[] = ['user', 'room', 'room.owner', 'members', 'members.user', 'jobs'];

  constructor(
    @InjectRepository(BusinessEntity)
    private readonly businessRepo: Repository<BusinessEntity>,
    @InjectRepository(BusinessJobEntity)
    private readonly businessJobRepo: Repository<BusinessJobEntity>,
  ) {}

  getAll(): Promise<BusinessEntity[]> {
    return this.businessRepo.find({
      relations: this.eagerRelations,
    });
  }

  getVacantJobs(): Promise<BusinessJobEntity[]> {
    return this.businessJobRepo.find({
      where: {
        vacantSpots: MoreThan(0),
      },
      relations: ['business', 'business.user', 'business.room'],
    });
  }

  getByID(groupID: number): Promise<BusinessEntity> {
    return this.businessRepo.findOneOrFail({
      where: {
        id: groupID,
      },
      relations: [...this.eagerRelations,  'jobs.users', 'jobs.users.user'],
    });
  }

  getJobByID(jobID: number): Promise<BusinessJobEntity> {
    return this.businessJobRepo.findOneOrFail({
      where: {
        id: jobID,
      },
      relations: ['business', 'business.user', 'business.room'],
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
