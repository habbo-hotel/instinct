import React from 'react';
import {GangInviteWidget} from './gang/GangInvite';
import {JobOfferWidget} from './job-offer/JobOffer';
import {GangDisbandWidget} from './gang/GangDisband';

export function ClientWidgets() {
  return (
    <>
      <GangDisbandWidget />
      <GangInviteWidget />
      <JobOfferWidget />
    </>
  );
}
