import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {InstinctRPModule} from '@instinct-prj/backend-rp';
import {
  databaseUser,
  databaseName,
  databaseHost,
  databasePass,
  databaseEntities,
  InstinctModule,
} from '@instinct-prj/backend';
import {rpDatabaseEntities} from '@instinct-prj/backend-rp/src/database/database.meta';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseHost,
      username: databaseUser,
      password: databasePass,
      database: databaseName,
      entities: [...databaseEntities, ...rpDatabaseEntities],
      synchronize: false,
    }),
    InstinctModule,
  ],
})
export class InstinctAppModule {}
