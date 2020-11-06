import {Provider} from '@nestjs/common';
import {
  BusinessEntity,
  BusinessPositionEntity,
  BusinessPositionRepository,
  BusinessRepository,
} from './business';

export const rpDatabaseEntities: Function[] = [
  BusinessEntity,
  BusinessPositionEntity,
];

export const rpDatabaseProviders: Provider[] = [
  BusinessRepository,
  BusinessPositionRepository,
];
