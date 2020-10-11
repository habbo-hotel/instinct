import React from 'react';
import { Rank } from 'instinct-interfaces';
import { setURL } from 'instinct-frontend';
import { RankEditor } from './editor/RankEditor';

setURL('admin/users/ranks/create', <EditRank />);

export function EditRank() {

  async function onSave(rank: Rank): Promise<void> {
  }

  return <RankEditor onSave={onSave} />
}