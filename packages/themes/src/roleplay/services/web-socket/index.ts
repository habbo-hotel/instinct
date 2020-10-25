import {WebSocketService} from './WebSocket.types';
import {WebSocketServiceImplementation} from './WebSocket';

export const webSocketService: WebSocketService = new WebSocketServiceImplementation();
