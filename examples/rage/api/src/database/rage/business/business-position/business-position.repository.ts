import {Injectable} from '@nestjs/common';
import {MoreThan, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {BusinessPosition} from 'instinct-rp-interfaces';
import {businessPositionWire} from './business-position.wire';
import {BusinessPositionEntity} from './business-position.entity';
import {BusinessJobApplicationEntity} from '../business-job-application/business-job-application.entity';
import {BusinessJobApplicationRepository} from '../business-job-application/business-job-application.repository';

@Injectable()
export class BusinessPositionRepository {
  readonly eagerRelations: string[] = [];

  constructor(
    @InjectRepository(BusinessPositionEntity)
    private readonly businessPositionRepo: Repository<BusinessPositionEntity>,
    private readonly businessJobApplicationRepo: BusinessJobApplicationRepository
  ) {}

  getAll(): Promise<BusinessPositionEntity[]> {
    return this.businessPositionRepo.find({
      relations: this.eagerRelations,
    });
  }

  getVacant(): Promise<BusinessPositionEntity[]> {
    return this.businessPositionRepo.find({
      where: {
        vacantSpots: MoreThan(0),
      },
      relations: this.eagerRelations,
    });
  }

  async getVacantForUserID(userID: number): Promise<BusinessPosition[]> {
    const vacantJobs: BusinessPositionEntity[] = await this.getVacant();
    const jobApplication: Array<BusinessJobApplicationEntity | undefined> = await Promise.all(
      vacantJobs.map(x => this.businessJobApplicationRepo.findOneForUserAndBusiness(userID, x.businessID))
    );

    return vacantJobs.map((vacantJob, index) => {
      return businessPositionWire(vacantJob, !!jobApplication[index]);
    });
  }

  findOneByIDOrFail(jobID: number): Promise<BusinessPositionEntity> {
    return this.businessPositionRepo.findOneOrFail({
      where: {
        id: jobID,
      },
      relations: this.eagerRelations,
    });
  }
}
