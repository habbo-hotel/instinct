import * as supertest from 'supertest';
import {TestingModule} from '@nestjs/testing';
import {mockHealthModule} from './health.module.mock';
import {HttpServer, HttpStatus, INestApplication} from '@nestjs/common';

describe('HealthController ', () => {
  let healthModule: TestingModule;
  let nestApplication: INestApplication;
  let httpServer: HttpServer;

  beforeAll(async () => {
    healthModule = await mockHealthModule();
    nestApplication = await healthModule.createNestApplication().init();
    httpServer = nestApplication.getHttpServer();
  });

  afterAll(async () => {
    await healthModule.close();
  });

  describe('GET `/health`', () => {
    it('will return HTTP 200 with a string', async () => {
      const response: any = await supertest(httpServer).get('/health');

      expect(response.status).toEqual(HttpStatus.OK);
      expect(response.text).toEqual('Healthy');
    });
  });
});
