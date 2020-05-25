import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {BusinessPositionEntity} from '../database/rage/business/business-position/business-position.entity';
import {BusinessPositionRepository} from '../database/rage/business/business-position/business-position.repository';

@Injectable()
export class BusinessPositionPipe implements PipeTransform {
  constructor(private readonly businessJobRepo: BusinessPositionRepository) {}

  async transform(jobID: number): Promise<BusinessPositionEntity> {
    try {
      return await this.businessJobRepo.findOneByIDOrFail(jobID);
    } catch (e) {
      throw new NotFoundException('Job does not exist');
    }
  }
}
