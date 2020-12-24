import {Room} from '@jankuss/shroom';
import {roomContext} from './RoomContext';
import {gameContext} from '../../game/context/GameContext';
import React, {useContext, useEffect, useState} from 'react';
import {RoomContextProviderProps} from './RoomContext.types';

export function RoomContextProvider({children}: RoomContextProviderProps) {
  const {game, pixi} = useContext(gameContext);
  const [room, setRoom] = useState<Room>();

  useEffect(() => {
    console.log('adding room');
    const room = Room.create(game, {
      tilemap: `
      xxxxx
      x0000
      x0000
      x0000
     `,
    });

    pixi.stage.addChild(room);
    setRoom(room);
  }, []);

  if (!room) {
    return (
      <>
        <i className="fa fa-spin fa-spinner mr-2" />
        Loading room
      </>
    );
  }

  return <roomContext.Provider value={{room}}>{children}</roomContext.Provider>;
}
