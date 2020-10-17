import {RankPipe} from './rank.pipe';
import {getConnection} from 'typeorm';
import {TestingModule} from '@nestjs/testing';
import {mockRankModule} from './rank.module.mock';
import {RankEntity} from '../database/entity/rank';
import {rankFactory} from '../database/factory/rank';

describe('RankPipe', () => {
  let rankModule: TestingModule;
  let rankPipe: RankPipe;

  let mockRank: RankEntity;

  beforeAll(async () => {
    rankModule = await mockRankModule();
    rankPipe = rankModule.get(RankPipe);
  });

  beforeEach(async () => {
    await getConnection().synchronize(true);
    mockRank = await rankFactory();
  });

  afterAll(async () => {
    await rankModule.close();
  });

  describe('transform', () => {
    it('will return a rank if it exists', async () => {
      const rank: RankEntity = await rankPipe.transform(mockRank.id!);
      expect(rank).toEqual(mockRank);
    });

    it('will throw an exception upon invalid rank ID', async () => {
      try {
        await rankPipe.transform(-1);
        fail();
      } catch (err) {
        expect(err).toBeDefined();
      }
    });
  });
});
