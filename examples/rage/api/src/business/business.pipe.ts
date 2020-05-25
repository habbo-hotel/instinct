import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {BusinessEntity} from '../database/rage/business/business/business.entity';
import {BusinessRepository} from '../database/rage/business/business/business.repository';

@Injectable()
export class BusinessPipe implements PipeTransform {
  constructor(private readonly businessRepo: BusinessRepository) {}

  async transform(businessID: number): Promise<BusinessEntity> {
    try {
      return await this.businessRepo.findOneByIDOrFail(businessID);
    } catch (e) {
      throw new NotFoundException('Business does not exist');
    }
  }
}
