import {RoomPipe} from './room.pipe';
import {RoomService} from './room.service';
import {Room} from '@instinct/interface';
import {Controller, Get, Param} from '@nestjs/common';
import {RoomEntity, roomWire} from '../database/entity/room';

@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  async getAll(): Promise<Room[]> {
    const rooms: RoomEntity[] = await this.roomService.getAll();
    return rooms.map(room => roomWire(room));
  }

  @Get('most_popular')
  async getMostPopular(): Promise<Room[]> {
    const mostPopularRooms: RoomEntity[] = await this.roomService.getMostPopular();
    return mostPopularRooms.map(room => roomWire(room));
  }

  @Get(':roomID')
  getByID(@Param('roomID', RoomPipe) room: RoomEntity): Room {
    return roomWire(room);
  }
}
