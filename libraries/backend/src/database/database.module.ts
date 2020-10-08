import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {databaseEntities, databaseRepositories} from './';
import {databaseHost, databaseName, databasePass, databaseUser} from '../common';

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
  providers: [...databaseRepositories],
  exports: [TypeOrmModule, ...databaseRepositories],
})
export class DatabaseModule {}
