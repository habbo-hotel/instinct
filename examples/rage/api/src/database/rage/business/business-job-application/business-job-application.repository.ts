import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BusinessJobApplicationEntity} from './business-job-application.entity';

@Injectable()
export class BusinessJobApplicationRepository {
  constructor(
    @InjectRepository(BusinessJobApplicationEntity) private readonly businessJobApplicationRepo: Repository<BusinessJobApplicationEntity>
  ) {}

  readonly eagerRelations: string[] = ['job', 'job.business', 'job.business.employees', 'job.business.owner', 'user'];

  async getAllForUser(userID: number): Promise<BusinessJobApplicationEntity[]> {
    return this.businessJobApplicationRepo.find({
      where: {
        userID,
      },
      relations: this.eagerRelations,
    });
  }

  async getAllForPosition(positionID: number): Promise<BusinessJobApplicationEntity[]> {
    return this.businessJobApplicationRepo.find({
      where: {
        jobID: positionID,
      },
      relations: this.eagerRelations,
    });
  }

  async createOneForUserAndPosition(userID: number, positionID: number, content: string): Promise<BusinessJobApplicationEntity> {
    const jobApplication: BusinessJobApplicationEntity = await this.businessJobApplicationRepo.save({
      id: undefined,
      userID,
      jobID: positionID,
      content,
    });

    return this.businessJobApplicationRepo.findOneOrFail({
      where: {
        id: jobApplication.id!,
      },
      relations: this.eagerRelations,
    });
  }

  async updateOneByIDOrFail(jobApplicationID: number, changes: Partial<BusinessJobApplicationEntity>): Promise<BusinessJobApplicationEntity> {
    await this.businessJobApplicationRepo.update(jobApplicationID, changes);
    return this.findOneByIDOrFail(jobApplicationID);
  }

  findOneByIDOrFail(jobApplicationID: number): Promise<BusinessJobApplicationEntity> {
    return this.businessJobApplicationRepo.findOneOrFail({
      where: {
        id: jobApplicationID,
      },
      relations: this.eagerRelations,
    });
  }

  findOneForUserAndBusiness(userID: number, businessID: number): Promise<BusinessJobApplicationEntity | undefined> {
    return this.businessJobApplicationRepo.findOne({
      where: {
        userID,
        jobID: businessID,
      },
      relations: this.eagerRelations,
    });
  }

  async deleteOneByID(jobApplicationID: number): Promise<void> {
    await this.businessJobApplicationRepo.delete(jobApplicationID);
  }
}
