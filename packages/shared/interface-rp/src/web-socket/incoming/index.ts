import {WebSocketIncomingJobOfferEvent} from './JobOffer';
import {WebSocketIncomingGangInfoEvent} from './gang/GangInfo';
import {WebSocketIncomingInitialRoomLoadedEvent} from './InitialRoomLoaded';
import {WebSocketIncomingUpdateProgressBarsEvent} from './ui/UpdateProgressBars';
import {WebSocketIncomingGangInviteReceivedEvent} from './gang/GangInviteReceived';
import {WebSocketIncomingGangDisbandConfirmationEvent} from './gang/GangDisbandConfirmation';

export interface WebSocketIncomingEvents {
  gang_info: WebSocketIncomingGangInfoEvent;
  update_progress_bars: WebSocketIncomingUpdateProgressBarsEvent;
  gang_invite_received: WebSocketIncomingGangInviteReceivedEvent;
  gang_disband_confirmation: WebSocketIncomingGangDisbandConfirmationEvent;
  user_offered_something: WebSocketIncomingJobOfferEvent;
  initial_room_loaded: WebSocketIncomingInitialRoomLoadedEvent;
}

export type WebSocketIncomingEvent = keyof WebSocketIncomingEvents;

export * from './gang';
export * from './ui';
export * from './JobOffer';
export * from './InitialRoomLoaded';
