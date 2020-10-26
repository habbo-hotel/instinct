import {WebSocketOutgoingAuthenticationEvent} from './Authentication';

export interface WebSocketOutgoingEvents {
  auth_with_sso: WebSocketOutgoingAuthenticationEvent;
}

export type WebSocketOutgoingEvent = keyof WebSocketOutgoingEvents;

export * from './Authentication';
