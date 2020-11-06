import {TypeOrmModule} from '@nestjs/typeorm';
import {Module, Provider} from '@nestjs/common';
import {DatabaseModule as CoreDatabaseModule} from '@instinct-prj/backend';

const databaseEntities: Function[] = [];

const databaseRepositories: Provider[] = [];

@Module({
  imports: [CoreDatabaseModule, TypeOrmModule.forFeature(databaseEntities)],
  providers: [...databaseRepositories],
  exports: [CoreDatabaseModule, TypeOrmModule, ...databaseRepositories],
})
export class DatabaseModule {}
