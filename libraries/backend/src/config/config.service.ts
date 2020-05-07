import { InstinctConfig } from './';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  constructor(private readonly config: InstinctConfig) {}

  get<T extends keyof InstinctConfig>(key: T): InstinctConfig[T] {
    return this.config[key];
  }
}
