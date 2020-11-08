import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {InstinctRPModule} from '@instinct-prj/backend-rp';
import {CerberusModule} from '../../../packages/cerberus/src/cerberus.module';
import {rpDatabaseEntities} from '@instinct-prj/backend-rp/src/database/database.meta';
import {
  databaseUser,
  databaseName,
  databaseHost,
  databasePass,
  databaseEntities,
  InstinctModule,
} from '@instinct-prj/backend';

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
    CerberusModule,
    InstinctModule,
    InstinctRPModule,
  ],
})
export class InstinctAppModule {}
