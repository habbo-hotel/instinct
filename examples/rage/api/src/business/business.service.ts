import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Like, MoreThan, Repository} from 'typeorm';
import {BusinessEntity, BusinessJobApplicationEntity, BusinessJobEntity, businessJobWire} from '../database/entity/business';
import {BusinessJob} from 'instinct-rp-interfaces';

@Injectable()
export class BusinessService {
  readonly eagerRelations: string[] = ['owner', 'room', 'room.owner', 'employees', 'employees.user', 'jobs'];

  constructor(
    @InjectRepository(BusinessEntity)
    private readonly businessRepo: Repository<BusinessEntity>,
    @InjectRepository(BusinessJobEntity)
    private readonly businessJobRepo: Repository<BusinessJobEntity>,
    @InjectRepository(BusinessJobApplicationEntity)
    private readonly businessJobApplicationRepo: Repository<BusinessJobApplicationEntity>
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

  async getVacantJobsForUser(userID: number): Promise<BusinessJob[]> {
    try {
      const vacantJobs: BusinessJobEntity[] = await this.getVacantJobs();
      const jobApplication: Array<BusinessJobApplicationEntity | undefined> = await Promise.all(
        vacantJobs.map(x => this.getJobApplicationForUser(userID, x.rankID))
      );

      return vacantJobs.map((vacantJob, index) => {
        return businessJobWire(vacantJob, !!jobApplication[index]);
      });
    } catch (e) {
      console.log('wtf');
      console.log(e);
      throw e;
    }
  }

  async getByID(groupID: number): Promise<BusinessEntity> {
    return this.businessRepo.findOneOrFail({
      where: {
        id: groupID,
      },
      relations: [...this.eagerRelations, 'jobs.users', 'jobs.users.user'],
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

  async getJobByIDForUser(userID: number, jobID: number): Promise<BusinessJob> {
    const job: BusinessJobEntity = await this.getJobByID(jobID);
    const jobApplication: BusinessJobApplicationEntity | undefined = await this.getJobApplicationForUser(userID, jobID);
    return businessJobWire(job, !!jobApplication);
  }

  getJobApplicationForUser(userID: number, jobID: number): Promise<BusinessJobApplicationEntity | undefined> {
    return this.businessJobApplicationRepo.findOne({
      where: {
        userID,
        rankID: jobID,
      },
      relations: ['job', 'user'],
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

  async createJobApplicationForUser(userID: number, jobID: number, content: string): Promise<BusinessJobApplicationEntity> {
    const jobApplication: BusinessJobApplicationEntity = await this.businessJobApplicationRepo.save({
      id: undefined,
      userID,
      jobID,
      content,
    });

    return this.businessJobApplicationRepo.findOneOrFail({
      where: {
        id: jobApplication.id!,
      },
      relations: ['job', 'user'],
    });
  }
}
