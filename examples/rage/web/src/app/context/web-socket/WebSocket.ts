import { WebSocketService } from './';
import { IMessageEvent, w3cwebsocket } from 'websocket';
import { ClientEvent, clientService } from 'instinct-frontend';

class WebSocketServiceImplementation implements WebSocketService {

  private server: w3cwebsocket|undefined;

  constructor() {
    clientService.eventListener.on(ClientEvent.ENTERED_HOTEL, this.startConnection);
  }

  startConnection(): void {
    console.log('Attempting connection');
    this.server = new w3cwebsocket('ws://127.0.0.1:3012/2');

    this.server.onerror = this.onError;
    this.server.onopen = this.onConnection;
    this.server.onmessage = this.onMessage;
    this.server.onclose = this.onClose;
  }

  onConnection(): void {
    console.log('Connection established');
  }

  onError(error: Error): void {
    console.log(error);
  }

  onClose(): void {
    console.log('Connection closed');
  }

  onMessage(message: IMessageEvent): void {
    console.log(message);
  }

}

export const webSocketService: WebSocketService = new WebSocketServiceImplementation();