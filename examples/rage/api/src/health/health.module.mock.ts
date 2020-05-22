import {Module} from '@nestjs/common';
import {DatabaseModuleMock} from '../database';
import {Test, TestingModule} from '@nestjs/testing';
import {HealthController} from './health.controller';
import {ModuleMetadata} from '@nestjs/common/interfaces';

const healthModuleMeta: ModuleMetadata = {
  imports: [DatabaseModuleMock],
  controllers: [HealthController],
};

export function mockHealthModule(): Promise<TestingModule> {
  return Test.createTestingModule(healthModuleMeta).compile();
}

@Module(healthModuleMeta)
export class HealthModuleMock {}
