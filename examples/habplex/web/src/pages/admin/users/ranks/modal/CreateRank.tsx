import React from 'react';
import { Icon } from 'instinct-frontend';
import { Rank } from 'instinct-interfaces';
import { RankEditor } from '../editor/RankEditor';

export function CreateRankModal() {
  async function onSave(rank: Rank): Promise<void> {
  }

  return (
    <RankEditor onSave={onSave}>
      <button className="btn btn-primary">
        <Icon type="plus-circle mr-2"/>
        Create
      </button>
    </RankEditor>
  )
}