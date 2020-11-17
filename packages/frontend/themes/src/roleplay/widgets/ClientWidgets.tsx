import React from 'react';
import {GangInfoWidget} from './gang/GangInfo';
import {GangInviteWidget} from './gang/GangInvite';
import {JobOfferWidget} from './job-offer/JobOffer';
import {BottomBar} from './ui/bottom-bar/BottomBar';
import {GangDisbandWidget} from './gang/GangDisband';
import {UserStatusWidget} from './ui/user-status/UserStatus';

export function ClientWidgets() {
  return (
    <>
      <BottomBar />
      <UserStatusWidget />
      <GangInfoWidget />
      <GangDisbandWidget />
      <GangInviteWidget />
      <JobOfferWidget />
    </>
  );
}
