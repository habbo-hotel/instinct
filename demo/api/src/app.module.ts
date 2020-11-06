import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {InstinctRPModule} from '@instinct-prj/backend-rp';
import {
  databaseUser,
  databaseName,
  databaseHost,
  databasePass,
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
      entities: ['*.entity.ts'],
      autoLoadEntities: true,
      synchronize: false,
    }),
    InstinctModule,
    InstinctRPModule,
  ],
})
export class InstinctAppModule {}
