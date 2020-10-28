import {Room} from '@instinct-prj/interface';

export interface RoomService {
  getAll(): Promise<Room[]>;

  getMostPopular(): Promise<Room[]>;

  getByID(roomID: string): Promise<Room>;
}
