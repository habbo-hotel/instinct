export interface WebSocketServiceBase {
  addSubscriber(event: string, callback: WebSocketSubscriber): void;
  sendEvent(event: string, payload: object): void;
}

export type WebSocketSubscriber = (payload: any) => void | Promise<void>;
