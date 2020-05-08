import {RoomPipe} from './room.pipe';
import {Module} from '@nestjs/common';
import {RoomService} from './room.service';
import {RoomController} from './room.controller';
import {Test, TestingModule} from '@nestjs/testing';
import {ModuleMetadata} from '@nestjs/common/interfaces';
import {DatabaseModule} from '../database/database.module';

const roomModuleMeta: ModuleMetadata = {
  imports: [DatabaseModule],
  controllers: [RoomController],
  providers: [RoomPipe, RoomService],
  exports: [RoomPipe, RoomService],
};

export function mockRoomModule(): Promise<TestingModule> {
  return Test.createTestingModule(roomModuleMeta).compile();
}

@Module(roomModuleMeta)
export class RoomModuleMock {}
