import { databaseEntities } from './';
import { InstinctConfig } from '../config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class DatabaseModule {
  static forRoot(config: InstinctConfig): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: config.databaseHost,
          username: config.databaseUser,
          password: config.databasePass,
          database: config.databaseName,
          entities: databaseEntities,
          synchronize: false,
        }),
        TypeOrmModule.forFeature(databaseEntities),
      ],
      exports: [TypeOrmModule],
    };
  }
}
