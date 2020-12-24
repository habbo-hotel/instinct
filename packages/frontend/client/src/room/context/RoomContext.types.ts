import {Room} from '@jankuss/shroom';
import {ReactNode} from 'react';

export interface RoomContextProviderProps {
  children: ReactNode;
}

export interface RoomContextState {
  room: Room;
}

export const exampleRoomContextState: RoomContextState = {
  room: {} as any,
};

export type RoomContext = RoomContextState;

export const exampleRoomContext: RoomContext = {
  ...exampleRoomContextState,
};
