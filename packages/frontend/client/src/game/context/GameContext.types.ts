import {ReactNode} from 'react';
import * as PIXI from 'pixi.js';
import {Shroom} from '@jankuss/shroom';

export interface GameContextProviderProps {
  children: ReactNode;
  game: Shroom;
  canvas: HTMLCanvasElement;
  pixi: PIXI.Application;
}

export type GameContext = Omit<GameContextProviderProps, 'children'>;
