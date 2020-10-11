import React from 'react';
import { toast } from 'react-toastify';
import { RankDTO } from 'instinct-interfaces';
import { RankEditor } from '../rank-editor/RankEditor';
import { Icon, rankService } from 'instinct-frontend';

export function CreateRankModal() {
  async function onSave(rank: RankDTO): Promise<void> {
    await rankService.create(rank);
    toast.success(`Rank ${rank.name} has been created`);
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