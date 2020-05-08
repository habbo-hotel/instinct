import * as supertest from 'supertest';
import {getConnection} from 'typeorm';
import {TestingModule} from '@nestjs/testing';
import {mockRankModule} from './rank.module.mock';
import {UserEntity} from '../database/entity/user';
import {userFactory} from '../database/factory/user';
import {rankFactory} from '../database/factory/rank';
import {RankEntity, rankWire} from '../database/entity/rank';
import {HttpServer, HttpStatus, INestApplication} from '@nestjs/common';

describe('RankController', () => {
  let rankModule: TestingModule;
  let nestApplication: INestApplication;
  let httpServer: HttpServer;

  let mockUser: UserEntity;
  let mockRank: RankEntity;

  let mockStaffUser: UserEntity;
  let mockStaffRank: RankEntity;

  beforeAll(async () => {
    rankModule = await mockRankModule();
    nestApplication = await rankModule.createNestApplication().init();
    httpServer = nestApplication.getHttpServer();
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
    await nestApplication.close();
  });

  describe('GET `/ranks`', () => {
    it('will return a HTTP OK with an array of all ranks with their users', async () => {
      const response: any = await supertest(httpServer).get('/ranks');
      expect(response.status).toEqual(HttpStatus.OK);
      expect(response.data).toEqual([rankWire(mockRank)]);
    });
  });

  describe('GET `/ranks/staff`', () => {
    it('will return a HTTP OK with an array of ranks above the level `4` with their users', async () => {
      const response: any = await supertest(httpServer).get('/ranks');
      expect(response.status).toEqual(HttpStatus.OK);
      expect(response.data).toEqual([rankWire(mockStaffRank)]);
    });
  });

  describe('GET `/ranks/:rankID`', () => {
    it('will return a HTTP OK with a rank with its users if it exists', async () => {
      const response: any = await supertest(httpServer).get(`/ranks/${mockRank.id!}`);
      expect(response.status).toEqual(HttpStatus.OK);
      expect(response.data).toEqual(rankWire(mockRank));
    });

    it('will throw a HTTP NOT_FOUND exception upon invalid rank ID', async () => {
      const response: any = await supertest(httpServer).get('/ranks/-1');
      expect(response.status).toEqual(HttpStatus.NOT_FOUND);
    });
  });
});
