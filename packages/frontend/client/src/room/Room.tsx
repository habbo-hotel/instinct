import React from 'react';
import {RoomProps} from './Room.types';
import {RoomContextProvider} from './context/RoomContext.provider';

export function Room({children}: RoomProps) {
  return <RoomContextProvider>{children}</RoomContextProvider>;
}
