import { Room } from 'instinct-interfaces';

export interface RoomState {
  room?: Room;
  showSpinner: boolean;
}

export const defaultRoomState: RoomState = {
  room: undefined,
  showSpinner: true,
};
