import {WebSocketOutgoingAuthenticationEvent} from './Authentication';
import {WebSocketOutgoingGangInviteDecisionEvent} from './gang/GangInviteDecision';
import {WebSocketOutgoingGangDisbandDecisionEvent} from './gang/GangDisbandConfirmation';

export interface WebSocketOutgoingEvents {
  auth_with_sso: WebSocketOutgoingAuthenticationEvent;
  gang_invite_decision: WebSocketOutgoingGangInviteDecisionEvent;
  gang_disband_decision: WebSocketOutgoingGangDisbandDecisionEvent;
}

export type WebSocketOutgoingEvent = keyof WebSocketOutgoingEvents;

export * from './Authentication';
export * from './gang';
