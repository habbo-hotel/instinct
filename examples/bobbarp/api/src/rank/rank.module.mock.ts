import {RankPipe} from './rank.pipe';
import {Module} from '@nestjs/common';
import {RankService} from './rank.service';
import {RankController} from './rank.controller';
import {Test, TestingModule} from '@nestjs/testing';
import {ModuleMetadata} from '@nestjs/common/interfaces';
import {DatabaseModule} from '../database/database.module';

const rankModuleMeta: ModuleMetadata = {
  imports: [DatabaseModule],
  controllers: [RankController],
  providers: [RankPipe, RankService],
  exports: [RankPipe, RankService],
};

export function mockRankModule(): Promise<TestingModule> {
  return Test.createTestingModule(rankModuleMeta).compile();
}

@Module(rankModuleMeta)
export class RankModuleMock {}
