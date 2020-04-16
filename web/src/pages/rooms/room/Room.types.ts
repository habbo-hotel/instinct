import { Room } from 'fashionkilla-interfaces';

export interface RoomState {
  room?: Room;
  showSpinner: boolean;
}

export const defaultRoomState: RoomState = {
  room: undefined,
  showSpinner: true,
};
