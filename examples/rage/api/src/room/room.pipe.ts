import { InjectRepository } from '@nestjs/typeorm';
import { RoomEntity, RoomRepository} from '../database/rage/room';
import {PipeTransform, Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class RoomPipe implements PipeTransform {
  constructor(@InjectRepository(RoomRepository) private readonly roomRepo: RoomRepository) { }

  async transform(roomID: number): Promise<RoomEntity> {
    try {
      return await this.roomRepo.findOneByIDOrFail(roomID);
    } catch {
      throw new NotFoundException('Room does not exist');
    }
  }
}
