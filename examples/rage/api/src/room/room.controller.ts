import {RoomPipe} from './room.pipe';
import {Room} from 'instinct-rp-interfaces';
import {InjectRepository} from '@nestjs/typeorm';
import {Controller, Get, Param} from '@nestjs/common';
import {roomWire} from '../database/rage/room/room.wire';
import {RoomEntity} from '../database/rage/room/room.entity';
import {RoomRepository} from '../database/rage/room/room.repository';

@Controller('rooms')
export class RoomController {
  constructor(@InjectRepository(RoomRepository) private readonly roomRepo: RoomRepository) {}

  @Get()
  async getAll(): Promise<Room[]> {
    const rooms: RoomEntity[] = await this.roomRepo.getAll();
    return rooms.map(room => roomWire(room));
  }

  @Get('most_popular')
  async getMostPopular(): Promise<Room[]> {
    const mostPopularRooms: RoomEntity[] = await this.roomRepo.getMostPopular();
    return mostPopularRooms.map(room => roomWire(room));
  }

  @Get(':roomID')
  getByID(@Param('roomID', RoomPipe) room: RoomEntity): Room {
    return roomWire(room);
  }
}
