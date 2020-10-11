import { Link } from 'wouter';
import React, { useContext } from 'react';
import { Rank } from 'instinct-interfaces';
import { RankEditor } from '../editor/RankEditor';
import { configContext } from 'instinct-frontend';
import { EditRankModalProps } from './EditRank.types';

export function EditRankModal({ rank }: EditRankModalProps) {
  const { config } = useContext(configContext);

  async function onSave(rank: Rank): Promise<void> {

  }

  return (
    <div className="admin-article row mb-3" key={rank.id} style={{ height: 100, width: '100%' }}>
      <div className="col-2">
        <img alt="rank badge" src={`${config.swfBadgeURL}/${rank.badge}.gif`} style={{ marginTop: '30%'}} />
      </div>
      <div className="col-10 text-right">
        <h3>{rank.name}</h3>
        <RankEditor defaultRank={rank} onSave={onSave}>
          <button className="btn btn-primary" style={{ marginTop: -10 }}>
            <i className="fa fa-pencil mr-2"/>
            Edit
          </button>
        </RankEditor>
      </div>
    </div>
  )
}