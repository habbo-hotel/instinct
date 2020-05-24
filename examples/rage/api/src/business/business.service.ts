import {Like, MoreThan} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {BusinessJob} from 'instinct-rp-interfaces';
import {BusinessEntity} from '../database/rage/business/business/business.entity';
import {businessJobWire} from '../database/rage/business/business-job/business-job.wire';
import {BusinessRepository} from '../database/rage/business/business/business.repository';
import {BusinessJobEntity} from '../database/rage/business/business-job/business-job.entity';
import {BusinessJobRepository} from '../database/rage/business/business-job/business-job.repository';
import {BusinessJobApplicationEntity} from '../database/rage/business/business-job-application/business-job-application.entity';
import {BusinessJobApplicationRepository} from '../database/rage/business/business-job-application/business-job-application.repository';

@Injectable()
export class BusinessService {
  readonly eagerRelations: string[] = ['owner', 'room', 'room.owner', 'employees', 'employees.user', 'jobs'];

  constructor(
    private readonly businessRepo: BusinessRepository,
    private readonly businessJobRepo: BusinessJobRepository,
    private readonly businessJobApplicationRepo: BusinessJobApplicationRepository
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
      relations: ['business', 'business.owner', 'business.room'],
    });
  }

  async getVacantJobsForUser(userID: number): Promise<BusinessJob[]> {
    const vacantJobs: BusinessJobEntity[] = await this.getVacantJobs();
    const jobApplication: Array<BusinessJobApplicationEntity | undefined> = await Promise.all(
      vacantJobs.map(x => this.getJobApplicationForUser(userID, x.rankID))
    );

    return vacantJobs.map((vacantJob, index) => {
      return businessJobWire(vacantJob, !!jobApplication[index]);
    });
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
      relations: ['business', 'business.owner', 'business.room'],
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
        jobID,
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
