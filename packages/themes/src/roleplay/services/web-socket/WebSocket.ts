import {WebSocketServiceBase, WebSocketSubscriber} from './WebSocket.types';
import {
  WebSocketIncomingEvent,
  WebSocketIncomingEvents,
  WebSocketOutgoingEvent,
  WebSocketOutgoingEvents,
} from '@instinct/interface-rp';

export class WebSocketService implements WebSocketServiceBase {
  readonly connection: WebSocket;

  subscribers: Record<string, WebSocketSubscriber<any>[]> = {};

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
  };

  onConnectionClosed = (event: CloseEvent) => {
    console.log('WS: Connection Closed ', event);
  };

  onMessage = (event: MessageEvent) => {
    const {event_name, event_data} = JSON.parse(event.data);
    const subscribers = this.subscribers[event_name] ?? [];
    console.log(
      `Found ${subscribers.length} subscribers for event ${event_name}`
    );

    for (const subscriber of subscribers) {
      subscriber(event_data);
    }
  };

  addSubscriber = <K extends WebSocketIncomingEvent>(
    event: K,
    callback: WebSocketSubscriber<WebSocketIncomingEvents[K]>
  ) => {
    if (this.subscribers[event]) {
      this.subscribers[event].push(callback);
    } else {
      this.subscribers[event] = [callback];
    }
  };

  sendEvent = <K extends WebSocketOutgoingEvent>(
    event: K,
    payload: Exclude<WebSocketOutgoingEvents[K], 'event_name'>
  ) => {
    console.log(`Sent event ${event} with payload ${payload}`);
    this.connection.send(
      JSON.stringify({
        event_name: event,
        event_data: payload,
      })
    );
  };
}
