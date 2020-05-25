import { BusinessJob } from 'instinct-rp-interfaces';
import { businessPositionWire } from './business-position.wire';
import {BusinessPositionEntity} from './business-position.entity';
import { EntityRepository, MoreThan, Repository } from 'typeorm';
import { BusinessJobApplicationEntity } from '../business-job-application/business-job-application.entity';
import { BusinessJobApplicationRepository } from '../business-job-application/business-job-application.repository';

@EntityRepository(BusinessPositionEntity)
export class BusinessPositionRepository extends Repository<BusinessPositionEntity> {
  readonly eagerRelations: string[] = [];

  constructor(private readonly businessJobApplicationRepo: BusinessJobApplicationRepository) {
    super();
  }

  getAll(): Promise<BusinessPositionEntity[]> {
    return this.find({
      relations: this.eagerRelations,
    })
  }

  getVacant(): Promise<BusinessPositionEntity[]> {
    return this.find({
      where: {
        vacantSpots: MoreThan(0),
      },
      relations: this.eagerRelations,
    })
  }

  async getVacantForUserID(userID: number): Promise<BusinessJob[]> {
    const vacantJobs: BusinessPositionEntity[] = await this.getVacant();
    const jobApplication: Array<BusinessJobApplicationEntity | undefined> = await Promise.all(
      vacantJobs.map(x => this.businessJobApplicationRepo.findOneForUserAndBusiness(userID, x.businessID))
    );

    return vacantJobs.map((vacantJob, index) => {
      return businessPositionWire(vacantJob, !!jobApplication[index]);
    });
  }

  findOneByIDOrFail(jobID: number): Promise<BusinessPositionEntity> {
    return this.findOneOrFail({
      where: {
        id: jobID,
      },
      relations: this.eagerRelations,
    });
  }

}


