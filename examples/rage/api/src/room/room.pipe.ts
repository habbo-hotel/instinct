import {RoomEntity} from '../database/rage/room/room.entity';
import {RoomRepository} from '../database/rage/room/room.repository';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class RoomPipe implements PipeTransform {
  constructor(private readonly roomRepo: RoomRepository) {}

  async transform(roomID: number): Promise<RoomEntity> {
    try {
      return await this.roomRepo.findOneByIDOrFail(roomID);
    } catch {
      throw new NotFoundException('Room does not exist');
    }
  }
}
