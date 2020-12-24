import {createContext} from 'react';
import {exampleRoomContext, RoomContext} from './RoomContext.types';

export const roomContext = createContext<RoomContext>(exampleRoomContext);
