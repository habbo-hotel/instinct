import {Repository} from 'typeorm';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {BusinessPositionEntity} from './business-position.entity';
import {BaseRepository} from '@instinct-prj/backend/src/database/base.repository';

@Injectable()
export class BusinessPositionRepository extends BaseRepository<
  BusinessPositionEntity
> {
  constructor(
    @InjectRepository(BusinessPositionEntity)
    businessPositionRepo: Repository<BusinessPositionEntity>
  ) {
    super(businessPositionRepo, []);
  }
}
