import {createContext} from 'react';
import {GameContext} from './GameContext.types';

export const gameContext = createContext<GameContext>({} as any);
