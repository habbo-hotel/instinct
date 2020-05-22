import {RoomPipe} from './room.pipe';
import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database';
import {RoomController} from './room.controller';
import {Test, TestingModule} from '@nestjs/testing';
import {ModuleMetadata} from '@nestjs/common/interfaces';

const roomModuleMeta: ModuleMetadata = {
  imports: [DatabaseModule],
  controllers: [RoomController],
  providers: [RoomPipe],
  exports: [RoomPipe],
};

export function mockRoomModule(): Promise<TestingModule> {
  return Test.createTestingModule(roomModuleMeta).compile();
}

@Module(roomModuleMeta)
export class RoomModuleMock {}
