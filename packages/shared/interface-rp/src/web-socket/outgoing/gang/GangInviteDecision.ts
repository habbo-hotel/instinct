export interface WebSocketOutgoingGangInviteDecisionEvent {
  gang_id: number;
  gang_rank: number;
  sender_id: number;
  decision: boolean;
}
