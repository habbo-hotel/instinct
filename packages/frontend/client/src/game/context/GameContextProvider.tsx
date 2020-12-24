import React from 'react';
import {gameContext} from './GameContext';
import {GameContextProviderProps} from './GameContext.types';

export function GameContextProvider({canvas, children, game, pixi}: GameContextProviderProps) {
  return (
    <gameContext.Provider value={{canvas, game, pixi}}>
      {children}
    </gameContext.Provider>
  );
}
