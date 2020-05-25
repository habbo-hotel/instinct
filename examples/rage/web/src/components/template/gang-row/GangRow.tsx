import React from 'react';
import { GangRowProps } from './';
import { RowContainer } from 'components';

export function GangRow({ gang, style }: GangRowProps) {
  return (
    <RowContainer image="/img/icons/wanted.png" header={gang.name} users={gang.users!.length} style={style}>
      <p>LOL</p>
    </RowContainer>
  )
}