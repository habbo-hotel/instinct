import {BusinessService} from './business.service';
import {BusinessJobEntity} from '../database/entity/business';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

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
