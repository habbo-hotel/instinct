import React from 'react';
import { CallForHelpWidget } from './call-for-help';
import { WantedListWidget } from './wanted-list';

export function Widgets() {
  return (
    <>
      <CallForHelpWidget/>
      <WantedListWidget/>
    </>
  )
}