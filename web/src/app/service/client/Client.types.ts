import { EventEmitter } from 'events';

export interface ClientService {
  eventListener: EventEmitter;
  enterRoom: (roomID: number) => void;
}

export enum ClientEvent {
  ENTERED_HOTEL = 'enteredHotelEvent',
}