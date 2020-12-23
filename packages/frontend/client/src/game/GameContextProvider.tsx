import React from 'react';
import * as Pixi from 'pixi.js';
import {Shroom} from '@jankuss/shroom';
import {gameContext} from './GameContext';
import {GameContextProviderProps} from './GameContext.types';

export function GameContextProvider({children}: GameContextProviderProps) {
  const clientRef: any = document.querySelector('#beta-client');
  const clientApp = new Pixi.Application({view: clientRef, resizeTo: window});
  const shroomApp = Shroom.create({
    application: clientApp,
    resourcePath: 'http://localhost:3001/swfs',
  });
  return (
    <gameContext.Provider value={{game: shroomApp, client: clientApp}}>
      <div style={{width: '100%', height: '100%'}}>
        <canvas id="beta-client" />
        {children}
      </div>
    </gameContext.Provider>
  );
}
