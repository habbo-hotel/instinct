import React from 'react';
import { GangRowProps } from './';
import { Link } from 'react-router-dom';
import { RowContainer } from 'components';

export function GangRow({ gang, style }: GangRowProps) {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/crime/gangs/${gang.id}`}>
      <RowContainer image="/img/icons/wanted.png" header={gang.name} users={gang.users!.length} style={style}>
        <span className="mr-4"><b>{gang.kills}</b> kills</span>
        <span className="mr-4"><b>{gang.deaths}</b> deaths</span>
        <span className="mr-4">Founded by <b>{gang.owner.username}</b></span>
      </RowContainer>
    </Link>
  )
}