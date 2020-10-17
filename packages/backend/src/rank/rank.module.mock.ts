import {RankPipe} from './rank.pipe';
import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {RankController} from './rank.controller';
import {Test, TestingModule} from '@nestjs/testing';
import {ModuleMetadata} from '@nestjs/common/interfaces';

const rankModuleMeta: ModuleMetadata = {
  imports: [DatabaseModule],
  controllers: [RankController],
  providers: [RankPipe],
  exports: [RankPipe],
};

export function mockRankModule(): Promise<TestingModule> {
  return Test.createTestingModule(rankModuleMeta).compile();
}

@Module(rankModuleMeta)
export class RankModuleMock {}
