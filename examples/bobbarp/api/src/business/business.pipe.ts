import {BusinessService} from './business.service';
import {BusinessEntity} from '../database/entity/business';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

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
