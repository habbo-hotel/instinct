import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {InstinctModule} from '@instinct-prj/backend';
import {InstinctRPModule, rpDatabaseEntities} from '@instinct-prj/backend-rp';
import {
  databaseEntities,
  databaseHost,
  databaseName,
  databasePass,
  databaseUser,
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
    InstinctModule,
    InstinctRPModule,
  ],
})
export class InstinctRoleplayAppModule {}
