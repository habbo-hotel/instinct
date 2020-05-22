import {RoomEntity} from './room.entity';
import {EntityRepository, Repository} from 'typeorm';

@EntityRepository(RoomEntity)
export class RoomRepository extends Repository<RoomEntity> {
  readonly eagerRelations: string[] = ['owner'];

  getAll(): Promise<RoomEntity[]> {
    return this.find({
      relations: this.eagerRelations,
    });
  }

  getMostPopular(): Promise<RoomEntity[]> {
    return this.find({
      order: {
        users: 'DESC',
      },
      take: 5,
      relations: this.eagerRelations,
    });
  }

  findOneByIDOrFail(roomID: number): Promise<RoomEntity> {
    return this.findOneOrFail({
      where: {
        id: roomID,
      },
      relations: this.eagerRelations,
    });
  }
}
