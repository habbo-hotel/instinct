import {getConnection} from 'typeorm';
import {PhotoService} from './photo.service';
import {TestingModule} from '@nestjs/testing';
import {UserEntity} from '../database/entity/user';
import {mockPhotoModule} from './photo.module.mock';
import {PhotoEntity} from '../database/entity/photo';
import {userFactory} from '../database/factory/user';
import {photoFactory} from '../database/factory/photo';

describe('PhotoService', () => {
  let photoModule: TestingModule;
  let photoService: PhotoService;

  let mockUser: UserEntity;
  let mockPhoto: PhotoEntity;

  beforeAll(async () => {
    photoModule = await mockPhotoModule();
    photoService = photoModule.get(PhotoService);
  });

  beforeEach(async () => {
    await getConnection().synchronize(true);

    mockUser = await userFactory();
    mockPhoto = await photoFactory({
      user: mockUser,
    });
  });

  afterAll(async () => {
    await photoModule.close();
  });

  describe('getAll', () => {
    it('will return an array of photos with their user', async () => {
      const photos: PhotoEntity[] = await photoService.getAll();
      expect(photos).toEqual([
        {
          ...mockPhoto,
          user: mockUser,
        },
      ]);
    });
  });

  describe('getByID', () => {
    it('will return a single photo with its user', async () => {
      const photo: PhotoEntity = await photoService.getByID(mockPhoto.id!);
      expect(photo).toEqual(mockPhoto);
      expect(photo.user).toEqual(mockUser);
    });

    it('will throw an exception upon invalid photo id', async () => {
      try {
        await photoService.getByID(-1);
        fail();
      } catch (err) {
        expect(err).toBeDefined();
      }
    });
  });
});
