import Moment from 'moment';
import React from 'react';
import { toast } from 'react-toastify';
import { BanEditor } from '../ban-editor';
import { UserBanDTO } from 'instinct-interfaces';
import { Avatar, banService } from 'instinct-frontend';
import { CreateBanModalProps } from './CreateBanModal.types';

export function EditBanModal({ ban }: CreateBanModalProps) {

  const defaultBan: UserBanDTO = {
    userID: ban.user.id,
    reason: ban.banReason,
    banStart: ban.banStart,
    banEnd: ban.banEnd,
  }

  async function onSave(banDTO: UserBanDTO) {
    await banService.updateByID(ban.id.toString(), banDTO);
    toast.success(`You have updated the ban on ${ban.user.username}`);
  }

  return (
    <BanEditor defaultBan={defaultBan} onSave={onSave}>
      <div className="admin-article row mb-3" key={ban.id} style={{ height: 100, width: '100%' }}>
        <div className="col-2">
          <Avatar look={ban.user.figure} headOnly />
        </div>
        <div className="col-10 text-right">
          <h3>{ban.user.username}</h3>
          <h5 style={{ marginTop: -10 }}>
            <b style={{ fontWeight: 'bold' }}>Ban Expires:</b> {Moment.unix(ban.banEnd).format('MM/DD/YYYY (hh:mmA)')}
          </h5>
          <div className="row mr-2" style={{ float: 'right' }}>
            <BanEditor defaultBan={defaultBan} onSave={onSave}>
              <button className="btn btn-primary btn-sm">
                <i className="fa fa-pencil"/>
              </button>
            </BanEditor>
          </div>
        </div>
      </div>
    </BanEditor>
  )
}