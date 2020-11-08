import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DatabaseModule as BaseDatabaseModule} from '@instinct-prj/backend';
import {rpDatabaseEntities, rpDatabaseProviders} from './database.meta';

@Module({
  imports: [BaseDatabaseModule, TypeOrmModule.forFeature(rpDatabaseEntities)],
  providers: [...rpDatabaseProviders],
  exports: [BaseDatabaseModule, TypeOrmModule, ...rpDatabaseProviders],
})
export class DatabaseModule {}
