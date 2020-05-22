import {BusinessService} from './business.service';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';
import {BusinessEntity} from '../database/rage/business/business/business.entity';

@Injectable()
export class BusinessPipe implements PipeTransform {
  constructor(private readonly businessService: BusinessService) {}

  async transform(businessID: number): Promise<BusinessEntity> {
    try {
      return await this.businessService.getByID(businessID);
    } catch (e) {
      console.log(e);
      throw new NotFoundException('Business does not exist');
    }
  }
}
