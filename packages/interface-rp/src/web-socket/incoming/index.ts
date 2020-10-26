import {WebSocketIncomingJobOfferEvent} from './JobOffer';
import {WebSocketIncomingInitialRoomLoadedEvent} from './InitialRoomLoaded';

export interface WebSocketIncomingEvents {
  user_offered_something: WebSocketIncomingJobOfferEvent;
  initial_room_loaded: WebSocketIncomingInitialRoomLoadedEvent;
}

export type WebSocketIncomingEvent = keyof WebSocketIncomingEvents;

export * from './JobOffer';
export * from './InitialRoomLoaded';
