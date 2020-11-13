import React from 'react';
import {GangInfoWidget} from './gang/GangInfo';
import {UserStatusWidget} from './ui/user-status/UserStatus';
import {GangInviteWidget} from './gang/GangInvite';
import {JobOfferWidget} from './job-offer/JobOffer';
import {GangDisbandWidget} from './gang/GangDisband';

export function ClientWidgets() {
  return (
    <>
      <UserStatusWidget />
      <GangInfoWidget />
      <GangDisbandWidget />
      <GangInviteWidget />
      <JobOfferWidget />
    </>
  );
}
