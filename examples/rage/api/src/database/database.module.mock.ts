import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {databaseEntities} from './database.meta';
import {Test, TestingModule} from '@nestjs/testing';
import {ModuleMetadata} from '@nestjs/common/interfaces';
import {databaseHost, databaseName, databasePass, databaseUser} from '../common';

const databaseModuleMeta: ModuleMetadata = {
  imports: [
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
  exports: [TypeOrmModule],
};

export function mockDatabaseModule(): Promise<TestingModule> {
  return Test.createTestingModule(databaseModuleMeta).compile();
}

@Module(databaseModuleMeta)
export class DatabaseModuleMock {}
