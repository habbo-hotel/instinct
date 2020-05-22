import { IMessageEvent } from 'websocket';

export interface WebSocketService {
  startConnection: () => void;
  onConnection: () => void;
  onMessage: (message: IMessageEvent) => void;

}