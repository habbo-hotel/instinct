import {EntityRepository, Repository} from 'typeorm';
import {BusinessJobApplicationEntity} from './business-job-application.entity';

@EntityRepository(BusinessJobApplicationEntity)
export class BusinessJobApplicationRepository extends Repository<BusinessJobApplicationEntity> {
  readonly eagerRelations: string[] = [];

  async createOneForUserAndBusiness(userID: number, businessID: number, content: string): Promise<BusinessJobApplicationEntity> {
    const jobApplication: BusinessJobApplicationEntity = await this.save({
      id: undefined,
      userID,
      jobID: businessID,
      content,
    });

    return this.findOneOrFail({
      where: {
        id: jobApplication.id!,
      },
      relations: this.eagerRelations,
    });
  }

  findOneForUserAndBusiness(userID: number, businessID: number): Promise<BusinessJobApplicationEntity | undefined> {
    return this.findOne({
      where: {
        userID,
        jobID: businessID,
      },
      relations: this.eagerRelations,
    });
  }


}