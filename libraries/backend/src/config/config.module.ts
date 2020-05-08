import {ConfigService, InstinctConfig} from './';
import {DynamicModule, Global, Module} from '@nestjs/common';

@Module({})
@Global()
export class ConfigModule {
  static forRoot(config: InstinctConfig): DynamicModule {
    return {
      module: ConfigModule,
      providers: [
        {
          provide: ConfigService,
          useFactory: () => new ConfigService(config),
        },
      ],
      exports: [ConfigService],
    };
  }
}
