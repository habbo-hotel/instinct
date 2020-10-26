import {WebSocketSubscriber} from '@instinct/frontend';

export interface WebSocketContext {
  startConnection(sso: string): void;
  onEvent(event: string, callback: WebSocketSubscriber): void;
  sendEvent(event: string, data: object): void;
}

export const defaultWebSocketContext: WebSocketContext = {
  startConnection(sso: string) {},
  onEvent(event: string, callback: WebSocketSubscriber) {},
  sendEvent(event: string, data: object) {},
};
