import {
  WebSocketIncomingEvent,
  WebSocketIncomingEvents,
  WebSocketOutgoingEvent,
  WebSocketOutgoingEvents,
} from '@instinct/interface-rp';

export interface WebSocketContext {
  onEvent<K extends WebSocketIncomingEvent>(
    event: K,
    callback: WebSocketSubscriber<K>
  ): void;
  sendEvent<K extends WebSocketOutgoingEvent>(
    event: K,
    data: WebSocketOutgoingEvents[K]
  ): void;
}

export const defaultWebSocketContext: WebSocketContext = {
  onEvent<K extends WebSocketIncomingEvent>(
    event: K,
    callback: WebSocketSubscriber<K>
  ) {},
  sendEvent(event: string, data: object) {},
};

export type WebSocketSubscriber<K extends WebSocketIncomingEvent> = (
  payload: WebSocketIncomingEvents[K]
) => void | Promise<void>;
