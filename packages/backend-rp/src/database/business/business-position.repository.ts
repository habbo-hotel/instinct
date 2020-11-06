import {Injectable} from '@nestjs/common';
import {BusinessPositionEntity} from './business-position.entity';
import {BaseRepository} from '@instinct-prj/backend/src/database/base.repository';

@Injectable()
export class BusinessPositionRepository extends BaseRepository<
  BusinessPositionEntity
> {
  constructor() {
    super(BusinessPositionEntity, []);
  }
}
