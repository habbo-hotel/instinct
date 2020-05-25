import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {BusinessJobApplicationEntity} from '../database/rage/business/business-job-application/business-job-application.entity';
import {BusinessJobApplicationRepository} from '../database/rage/business/business-job-application/business-job-application.repository';

@Injectable()
export class BusinessJobApplicationPipe implements PipeTransform {
  constructor(private readonly businessJobApplicationRepo: BusinessJobApplicationRepository) {}

  async transform(jobApplicationID: number): Promise<BusinessJobApplicationEntity> {
    try {
      return await this.businessJobApplicationRepo.findOneByIDOrFail(jobApplicationID);
    } catch {
      throw new NotFoundException('Job application does not exist');
    }
  }
}
