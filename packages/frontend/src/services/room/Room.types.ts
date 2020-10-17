import {Room} from '@instinct/interface';

export interface RoomService {
  getAll(): Promise<Room[]>;

  getMostPopular(): Promise<Room[]>;

  getByID(roomID: string): Promise<Room>;
}
