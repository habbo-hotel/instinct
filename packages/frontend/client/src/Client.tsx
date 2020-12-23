import React from 'react';
import {Room} from './room/Room';
import {GameContextProvider} from './game/GameContextProvider';

export function Client() {
  return (
    <GameContextProvider>
      <Room />
    </GameContextProvider>
  );
}
