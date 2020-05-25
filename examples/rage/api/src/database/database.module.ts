import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {databaseCustomRepositories, databaseEntities} from './database.meta';
import {databaseHost, databaseName, databasePass, databaseUser} from '../common/config';

@Module({
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
  providers: databaseCustomRepositories,
  exports: [TypeOrmModule, ...databaseCustomRepositories],
})
export class DatabaseModule {}
