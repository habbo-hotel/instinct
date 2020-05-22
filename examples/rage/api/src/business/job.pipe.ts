import {BusinessService} from './business.service';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {BusinessJobEntity} from '../database/rage/business/business-job/business-job.entity';

@Injectable()
export class BusinessJobPipe implements PipeTransform {
  constructor(private readonly businessService: BusinessService) {}

  async transform(jobID: number): Promise<BusinessJobEntity> {
    try {
      return await this.businessService.getJobByID(jobID);
    } catch (e) {
      throw new NotFoundException('Job does not exist');
    }
  }
}
