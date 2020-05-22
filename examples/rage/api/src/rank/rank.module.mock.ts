import {RankPipe} from './rank.pipe';
import {Module} from '@nestjs/common';
import {RankController} from './rank.controller';
import {Test, TestingModule} from '@nestjs/testing';
import {ModuleMetadata} from '@nestjs/common/interfaces';
import {DatabaseModuleMock} from '../database/database.module.mock';

const rankModuleMeta: ModuleMetadata = {
  imports: [DatabaseModuleMock],
  controllers: [RankController],
  providers: [RankPipe],
  exports: [RankPipe],
};

export function mockRankModule(): Promise<TestingModule> {
  return Test.createTestingModule(rankModuleMeta).compile();
}

@Module(rankModuleMeta)
export class RankModuleMock {}
