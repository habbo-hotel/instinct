import {W3CWebSocket, connection as Connection, IMessage} from 'websocket';
import {
  WebSocketEvent,
  WebSocketService,
  WebSocketSubscriber,
} from './WebSocket.types';

export class WebSocketServiceImplementation implements WebSocketService {
  readonly connection: W3CWebSocket;

  subscribers: Record<WebSocketEvent, Array<WebSocketSubscriber<any>>> = {
    [WebSocketEvent.CONNECTED]: [],
    [WebSocketEvent.AUTHENTICATED]: [],
  };

  addSubscriber<T>(event: WebSocketEvent, callback: WebSocketSubscriber<T>) {
    this.subscribers[event].push(callback as any);
  }

  constructor(ip: string, port: string) {
    this.connection = new W3CWebSocket(`ws://${ip}/${port}`);

    this.connection.on('connectFailed', this.onConnectionFailed);
    this.connection.on('connect', this.onConnectionSuccess);
  }

  onConnectionFailed() {
    console.log('WS Failed');
  }

  onConnectionSuccess(connection: Connection) {
    connection.on('message', (payload: IMessage) => {
      console.log(payload.type);
    });
  }
}
