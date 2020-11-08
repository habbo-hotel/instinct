import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BaseRepository} from '@instinct-prj/backend';
import {BusinessPositionEntity} from './business-position.entity';

@Injectable()
export class BusinessPositionRepository extends BaseRepository<
  BusinessPositionEntity
> {
  constructor(
    @InjectRepository(BusinessPositionEntity)
    businessPositionRepo: Repository<BusinessPositionEntity>
  ) {
    super(businessPositionRepo, ['employees', 'employees.user']);
  }
}
