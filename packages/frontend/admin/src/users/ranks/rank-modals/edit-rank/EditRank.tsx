import React, {useContext} from 'react';
import {EditRankModalProps} from './EditRank.types';
import {RankEditor} from '../../rank-editor/RankEditor';
import {DeleteRankModal} from '../delete-rank/DeleteRank';
import {configContext, rankService} from '@instinct-prj/frontend';
import {RankDTO, rankWireToRankDTO} from '@instinct-prj/interface';

export function EditRankModal({rank, onChanges}: EditRankModalProps) {
  const {config} = useContext(configContext);

  async function onSave(changes: RankDTO): Promise<void> {
    await rankService.updateByID(rank.id.toString(), changes);
    onChanges();
  }

  return (
    <div
      className="admin-article row mb-3"
      key={rank.id}
      style={{height: 100, width: '100%'}}
    >
      <div className="col-4">
        <img
          alt="rank badge"
          src={`${config.swfBadgeURL}/${rank.badge}.gif`}
          style={{marginTop: '20%'}}
        />
      </div>
      <div className="col-8 text-right">
        <h3>{rank.name}</h3>
        <div className="row mr-2" style={{float: 'right'}}>
          <DeleteRankModal
            rankID={rank.id}
            rankName={rank.name}
            onDeletion={onChanges}
          >
            <button className="btn btn-danger btn-sm mr-2">
              <i className="fa fa-trash" />
            </button>
          </DeleteRankModal>
          <RankEditor defaultRank={rankWireToRankDTO(rank)} onSave={onSave}>
            <button className="btn btn-primary btn-sm">
              <i className="fa fa-pencil" />
            </button>
          </RankEditor>
        </div>
      </div>
    </div>
  );
}
