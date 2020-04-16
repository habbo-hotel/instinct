import { Room } from 'fashionkilla-interfaces';

export interface RoomService {
  getAll(): Promise<Room[]>;

  getMostPopular(): Promise<Room[]>;

  getByID(roomID: number): Promise<Room>;
}
