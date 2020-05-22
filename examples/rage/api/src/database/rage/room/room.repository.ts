import { RoomEntity } from './room.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(RoomEntity)
export class RoomRepository extends Repository<RoomEntity> {

  readonly eagerRelations: string[] = [];

}