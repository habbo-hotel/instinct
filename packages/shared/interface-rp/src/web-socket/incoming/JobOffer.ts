export interface WebSocketIncomingJobOfferEvent {
  event_name: 'user_offered_something';
  event_data: {
    offer_name: 'job';
  };
}
