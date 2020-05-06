import React from 'react';
import { RoomContainerProps } from './';
import { redirect } from 'instinct-frontend';

export function RoomContainer({ room }: RoomContainerProps) {
  return (
    <img alt="room icon" src="http://localhost:3001/img/icons/room/1.gif" onClick={() => redirect(`rooms/${room.id}`)} style={{ cursor: 'pointer '}}/>
  )
}