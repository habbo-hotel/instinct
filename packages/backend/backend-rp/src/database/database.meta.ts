import {Provider} from '@nestjs/common';
import {UserRPStatEntity, UserRPStatRepository} from './user';
import {
  BusinessEntity,
  BusinessPositionEntity,
  BusinessPositionRepository,
  BusinessRepository,
} from './business';

export const rpDatabaseEntities: Function[] = [
  BusinessEntity,
  UserRPStatEntity,
  BusinessPositionEntity,
];

export const rpDatabaseProviders: Provider[] = [
  BusinessRepository,
  UserRPStatRepository,
  BusinessPositionRepository,
];
