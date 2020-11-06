import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {rpDatabaseEntities, rpDatabaseProviders} from './database.meta';

@Module({
  imports: [TypeOrmModule.forFeature(rpDatabaseEntities)],
  providers: [...rpDatabaseProviders],
  exports: [TypeOrmModule, ...rpDatabaseProviders],
})
export class DatabaseModule {}
