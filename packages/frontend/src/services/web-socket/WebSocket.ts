import {WebSocketServiceBase, WebSocketSubscriber} from './WebSocket.types';

export class WebSocketService implements WebSocketServiceBase {
  readonly connection: WebSocket;

  subscribers: Record<string, WebSocketSubscriber[]> = {};

  addSubscriber(event: string, callback: WebSocketSubscriber) {
    if (this.subscribers[event]) {
      this.subscribers[event].push(callback);
    } else {
      this.subscribers[event] = [callback];
    }
  }

  constructor(ip: string, port: string, readonly sso: string) {
    this.connection = new WebSocket(`ws://${ip}:${port}`);
    this.connection.onopen = this.onConnectionStarted;
    this.connection.onclose = this.onConnectionClosed;
    this.connection.onmessage = this.onMessage;
  }

  onConnectionStarted = () => {
    this.sendEvent('auth_with_sso', {
      sso_ticket: this.sso,
    });
  }

  onConnectionClosed = (event: CloseEvent) => {
    console.log('WS: Connection Closed ', event);
  }

  onMessage = (event: MessageEvent) => {
    console.log('WS Connection Message: ', event);
  }

  sendEvent = (event: string, payload: object) => {
    console.log(`Sent event ${event} with payload ${payload}`);
    this.connection.send(JSON.stringify({
      event_name: event,
      event_data: payload,
    }));
  }

}
