import React from 'react';
import {JobOfferWidget} from './job-offer/JobOffer';
import {InitialRoomLoadedWidget} from './initial-room-loaded/InitialRoomLoaded';

export function ClientWidgets() {
  return (
    <>
      <JobOfferWidget />
      <InitialRoomLoadedWidget />
    </>
  );
}
