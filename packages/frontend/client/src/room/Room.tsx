import {gameContext} from '../game/GameContext';
import {Room as RoomImpl, Avatar} from '@jankuss/shroom';
import React, {useContext, useEffect, useState} from 'react';

export function Room() {
  const {client, game} = useContext(gameContext);
  const [room, setRoom] = useState<RoomImpl>();

  useEffect(() => {
    setRoom(
      RoomImpl.create(game, {
        tilemap: `
   xxxxxxxxxxxxxxxxxxxxx
   x00000000000000000000
   x00000000000000000000
   x00000000000000000000
   `,
      })
    );
  }, []);

  return null;
}
