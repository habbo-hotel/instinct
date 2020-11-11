import {Provider} from '@nestjs/common';
import {UserRPStatEntity, UserRPStatRepository} from './user';
import {
  GangEntity,
  GangRepository,
  GangRankEntity,
  GangRankRepository,
} from './gang';
import {
  BusinessEntity,
  BusinessPositionEntity,
  BusinessPositionRepository,
  BusinessRepository,
} from './business';

export const rpDatabaseEntities: Function[] = [
  GangEntity,
  GangRankEntity,
  BusinessEntity,
  UserRPStatEntity,
  BusinessPositionEntity,
];

export const rpDatabaseProviders: Provider[] = [
  GangRepository,
  GangRankRepository,
  BusinessRepository,
  UserRPStatRepository,
  BusinessPositionRepository,
];
