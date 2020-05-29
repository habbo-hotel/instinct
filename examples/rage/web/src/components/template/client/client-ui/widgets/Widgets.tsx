import React from 'react';
import { MapWidget } from './map';
import { BusinessWidget } from './business';
import { WantedListWidget } from './wanted-list';
import { CallForHelpWidget } from './call-for-help';

export function Widgets() {
  return (
    <>
      <MapWidget />
      <BusinessWidget />
      <CallForHelpWidget />
      <WantedListWidget />
    </>
  );
}
