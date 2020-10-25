export interface WebSocketService {
  addSubscriber<T>(
    event: WebSocketEvent,
    callback: WebSocketSubscriber<T>
  ): void;
}

export type WebSocketSubscriber<T> = (payload: T) => void | Promise<void>;

export enum WebSocketEvent {
  CONNECTED,
  AUTHENTICATED,
}
