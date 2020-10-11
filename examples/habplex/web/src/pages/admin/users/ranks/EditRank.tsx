import React from 'react';
import { useRoute } from 'wouter';
import { Rank } from 'instinct-interfaces';
import { RankEditor } from './editor/RankEditor';
import { setURL, useFetchRankByID } from 'instinct-frontend';

setURL('admin/users/ranks/:rankID', <EditRank />);

export function EditRank() {
  const [ matched, params ] = useRoute<{ rankID: string }>('/admin/users/ranks/:rankID');
  const rank = useFetchRankByID(params!.rankID);

  async function onSave(rank: Rank): Promise<void> {

  }

  if (!rank) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return <RankEditor defaultRank={rank} onSave={onSave} />
}