import {ReactNode} from 'react';
import {Shroom} from '@jankuss/shroom';

export interface GameContext {
  game: Shroom;
  client: any;
}

export interface GameContextProviderProps {
  children?: ReactNode;
}
