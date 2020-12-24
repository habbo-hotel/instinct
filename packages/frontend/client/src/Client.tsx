import {Game} from './game/Game';
import {Room} from './room/Room';
import React, {useRef} from 'react';

export function Client() {
  const gameRef = useRef(null);
  return (
    <>
      <canvas style={{width: '100%', height: '100%'}} ref={gameRef} />
      {gameRef && (
        <Game canvas={gameRef.current as any}>
          <Room>
            <p>test room</p>
          </Room>
        </Game>
      )}
    </>
  );
}
