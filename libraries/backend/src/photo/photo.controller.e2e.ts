import * as supertest from 'supertest';
import {getConnection} from 'typeorm';
import {TestingModule} from '@nestjs/testing';
import {UserEntity} from '../database/entity/user';
import {mockPhotoModule} from './photo.module.mock';
import {userFactory} from '../database/factory/user';
import {photoFactory} from '../database/factory/photo';
import {PhotoEntity, photoWire} from '../database/entity/photo';
import {HttpServer, HttpStatus, INestApplication} from '@nestjs/common';

describe('PhotoController', () => {
  let photoModule: TestingModule;
  let nestApplication: INestApplication;
  let httpServer: HttpServer;

  let mockUser: UserEntity;
  let mockPhoto: PhotoEntity;

  beforeAll(async () => {
    photoModule = await mockPhotoModule();
    nestApplication = await photoModule.createNestApplication().init();
    httpServer = nestApplication.getHttpServer();
  });

  beforeEach(async () => {
    await getConnection().synchronize(true);

    mockUser = await userFactory();
    mockPhoto = await photoFactory({
      user: mockUser,
    });
  });

  afterAll(async () => {
    await nestApplication.close();
  });

  describe('GET `/photos`', () => {
    it('will return HTTP OK with an array of photos with their user', async () => {
      const response: any = await supertest(httpServer).get('/photos');
      expect(response.status).toEqual(HttpStatus.OK);
      expect(response.data).toEqual([photoWire(mockPhoto)]);
    });
  });

  describe('GET `/photos/:photoID`', () => {
    it('will return HTTP OK with a single photo with its user', async () => {
      const response: any = await supertest(httpServer).get(`/photos/${mockPhoto.id!}`);
      expect(response.status).toEqual(HttpStatus.OK);
      expect(response.data).toEqual(photoWire(mockPhoto));
    });

    it('will throw a HTTP NOT_FOUND upon invalid photo ID', async () => {
      const response: any = await supertest(httpServer).get('/photos/-1');
      expect(response.status).toEqual(HttpStatus.NOT_FOUND);
    });
  });
});
