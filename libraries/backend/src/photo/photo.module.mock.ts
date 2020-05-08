import {PhotoPipe} from './photo.pipe';
import {Module} from '@nestjs/common';
import {PhotoService} from './photo.service';
import {PhotoController} from './photo.controller';
import {Test, TestingModule} from '@nestjs/testing';
import {ModuleMetadata} from '@nestjs/common/interfaces';
import {DatabaseModule} from '../database/database.module';

const photoModuleMeta: ModuleMetadata = {
  imports: [DatabaseModule],
  controllers: [PhotoController],
  providers: [PhotoPipe, PhotoService],
  exports: [PhotoPipe, PhotoService],
};

export function mockPhotoModule(): Promise<TestingModule> {
  return Test.createTestingModule(photoModuleMeta).compile();
}

@Module(photoModuleMeta)
export class PhotoModuleMock {}
