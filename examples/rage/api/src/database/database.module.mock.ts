import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Test, TestingModule} from '@nestjs/testing';
import {CommonModule} from '../common/common.module';
import {ModuleMetadata} from '@nestjs/common/interfaces';
import {databaseCustomRepositories, databaseEntities} from './database.meta';
import {databaseHost, databaseName, databasePass, databaseUser} from '../common/config';

const databaseModuleMeta: ModuleMetadata = {
  imports: [
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseHost,
      username: databaseUser,
      password: databasePass,
      database: databaseName,
      entities: databaseEntities,
      synchronize: false,
    }),
    TypeOrmModule.forFeature(databaseEntities),
  ],
  providers: databaseCustomRepositories,
  exports: [TypeOrmModule, ...databaseCustomRepositories],
};

export function mockDatabaseModule(): Promise<TestingModule> {
  return Test.createTestingModule(databaseModuleMeta).compile();
}

@Module(databaseModuleMeta)
export class DatabaseModuleMock {}
