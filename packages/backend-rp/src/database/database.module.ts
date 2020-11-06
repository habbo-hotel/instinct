import {TypeOrmModule} from '@nestjs/typeorm';
import {Module, Provider} from '@nestjs/common';
import {BusinessEntity} from './business/business.entity';
import {BusinessRepository} from './business/business.repository';
import {DatabaseModule as CoreDatabaseModule} from '@instinct-prj/backend';
import {BusinessPositionEntity} from './business/business-position.entity';
import {BusinessPositionRepository} from './business/business-position.repository';

const databaseEntities: Function[] = [BusinessEntity, BusinessPositionEntity];

const databaseRepositories: Provider[] = [
  BusinessRepository,
  BusinessPositionRepository,
];

@Module({
  imports: [CoreDatabaseModule, TypeOrmModule.forFeature(databaseEntities)],
  providers: [...databaseRepositories],
  exports: [CoreDatabaseModule, TypeOrmModule, ...databaseRepositories],
})
export class DatabaseModule {}
