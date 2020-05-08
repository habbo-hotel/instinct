import {getConnection} from 'typeorm';
import {RankService} from './rank.service';
import {TestingModule} from '@nestjs/testing';
import {mockRankModule} from './rank.module.mock';
import {RankEntity} from '../database/entity/rank';
import {UserEntity} from '../database/entity/user';
import {userFactory} from '../database/factory/user';
import {rankFactory} from '../database/factory/rank';

describe('RankService', () => {
  let rankModule: TestingModule;
  let rankService: RankService;

  let mockUser: UserEntity;
  let mockRank: RankEntity;

  let mockStaffUser: UserEntity;
  let mockStaffRank: RankEntity;

  beforeAll(async () => {
    rankModule = await mockRankModule();
    rankService = rankModule.get(RankService);
  });

  beforeEach(async () => {
    await getConnection().synchronize(true);

    mockUser = await userFactory();
    mockRank = await rankFactory({
      users: [mockUser],
    });

    mockStaffUser = await userFactory();
    mockStaffRank = await rankFactory({
      users: [mockStaffUser],
    });
  });

  afterAll(async () => {
    await rankModule.close();
  });

  describe('getAll', () => {
    it('will return an array of all ranks with their users', async () => {
      const ranks: RankEntity[] = await rankService.getStaff();
      expect(ranks).toEqual([
        {
          ...mockStaffRank,
          users: [mockStaffUser],
        },
      ]);
    });
  });

  describe('getStaff', () => {
    it('will return an array of ranks above the level `4` with their users', async () => {
      const ranks: RankEntity[] = await rankService.getStaff();
      expect(ranks).toEqual([
        {
          ...mockStaffRank,
          users: [mockStaffUser],
        },
      ]);
    });
  });

  describe('getByID', () => {
    it('will return a rank with its users if it exists', async () => {
      const rank: RankEntity = await rankService.getByID(mockRank.id!);
      expect(rank).toEqual({
        ...mockRank,
        users: [mockUser],
      });
    });

    it('will throw an exception upon invalid rank ID', async () => {
      try {
        await rankService.getByID(-1);
        fail();
      } catch (err) {
        expect(err).toBeDefined();
      }
    });
  });
});
