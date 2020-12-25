import * as PIXI from 'pixi.js';
import {Shroom} from '@jankuss/shroom';

export interface ShroomEnvironment {
  canvas: HTMLCanvasElement;
  pixi: PIXI.Application;
  game: Shroom;
}

export function initShroom(): ShroomEnvironment {
  const view = document.querySelector('#game') as HTMLCanvasElement;
  const application = new PIXI.Application({
    view,
    antialias: false,
    resolution: window.devicePixelRatio,
    autoDensity: true,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const shroom = Shroom.create({
    application,
    resourcePath: 'http://localhost:3001/swfs',
  });
  return {
    canvas: view,
    pixi: application,
    game: shroom,
  };
}
