import React from 'react';
import * as PIXI from 'pixi.js';
import {Stage} from 'react-pixi-fiber';
import {GameProps} from './Game.types';
import {Shroom} from '@jankuss/shroom';
import {GameContextProvider} from './context/GameContextProvider';

export function Game({children, canvas}: GameProps) {
  const pixi = new PIXI.Application();
  const game = Shroom.create({
    application: pixi,
    resourcePath: '/swfs/',
  });

  return (
    <>
      <Stage app={pixi} />
      <GameContextProvider canvas={canvas} children={children} game={game} pixi={pixi}  />
    </>
  );
}
