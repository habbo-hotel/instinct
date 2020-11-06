import {BusinessEntity, BusinessRepository} from '../database/business';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class BusinessPipe implements PipeTransform {
  constructor(private readonly businessRepo: BusinessRepository) {}

  async transform(articleID: number): Promise<BusinessEntity> {
    try {
      return await this.businessRepo.findOneOrFail({id: articleID});
    } catch {
      throw new NotFoundException('Article does not exist');
    }
  }
}
