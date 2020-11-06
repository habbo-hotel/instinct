import {Injectable} from '@nestjs/common';
import {BusinessEntity} from './business.entity';
import {BaseRepository} from '@instinct-prj/backend/src/database/base.repository';

@Injectable()
export class BusinessRepository extends BaseRepository<BusinessEntity> {
  constructor() {
    super(BusinessEntity, []);
  }
}
