import {RoomEntity} from './room.entity';
import {Injectable} from '@nestjs/common';
import {BaseRepository} from '../base.repository';

@Injectable()
export class RoomRepository extends BaseRepository<RoomEntity> {
  constructor() {
    super(RoomEntity, ['users']);
  }
}
