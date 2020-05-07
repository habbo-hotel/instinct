import 'dotenv/config';
import { Module } from '@nestjs/common';
import { instinctConfig } from './config';
import { InstinctModule } from 'instinct-backend';

@Module({
  imports: [
    InstinctModule.forRoot(instinctConfig),
  ],
})
export class AppModule {}
