import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {CerberusModule} from '@instinct-prj/cerberus';
import {InstinctRPModule, rpDatabaseEntities} from '@instinct-prj/backend-rp';
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
export class InstinctRoleplayAPIModule {}
