import {getConnection} from 'typeorm';
import {PhotoPipe} from './photo.pipe';
import {TestingModule} from '@nestjs/testing';
import {mockPhotoModule} from './photo.module.mock';
import {PhotoEntity} from '../database/entity/photo';
import {photoFactory} from '../database/factory/photo';

describe('PhotoPipe', () => {
  let photoModule: TestingModule;
  let photoPipe: PhotoPipe;

  let mockPhoto: PhotoEntity;

  beforeAll(async () => {
    photoModule = await mockPhotoModule();
    photoPipe = photoModule.get(PhotoPipe);
  });

  beforeEach(async () => {
    await getConnection().synchronize(true);

    mockPhoto = await photoFactory();
  });

  afterAll(async () => {
    await photoModule.close();
  });

  describe('transform', () => {
    it('will return a photo entity for a valid photo id', async () => {
      const photo: PhotoEntity = await photoPipe.transform(mockPhoto.id!);
      expect(photo).toEqual(mockPhoto);
    });

    it('will throw HTTP NOT_FOUND upon invalid photo id', async () => {
      try {
        await photoPipe.transform(-1);
        fail();
      } catch (err) {
        expect(err).toBeDefined();
      }
    });
  });
});
