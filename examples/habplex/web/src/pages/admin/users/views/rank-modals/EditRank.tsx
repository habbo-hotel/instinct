import { toast } from 'react-toastify';
import React, { useContext } from 'react';
import { RankEditor } from '../rank-editor/RankEditor';
import { EditRankModalProps } from './EditRank.types';
import { configContext, rankService } from 'instinct-frontend';
import { RankDTO, rankWireToRankDTO } from 'instinct-interfaces';

export function EditRankModal({ rank, onChanges }: EditRankModalProps) {
  const { config } = useContext(configContext);

  async function onSave(changes: RankDTO): Promise<void> {
    await rankService.updateByID(rank.id.toString(), changes);
    toast.success(`Rank ${changes.name} has been updated`);
    onChanges();
  }

  return (
    <div className="admin-article row mb-3" key={rank.id} style={{ height: 100, width: '100%' }}>
      <div className="col-2">
        <img alt="rank badge" src={`${config.swfBadgeURL}/${rank.badge}.gif`} style={{ marginTop: '30%'}} />
      </div>
      <div className="col-10 text-right">
        <h3>{rank.name}</h3>
        <RankEditor defaultRank={rankWireToRankDTO(rank)} onSave={onSave}>
          <button className="btn btn-primary" style={{ marginTop: -10 }}>
            <i className="fa fa-pencil mr-2"/>
            Edit
          </button>
        </RankEditor>
      </div>
    </div>
  )
}