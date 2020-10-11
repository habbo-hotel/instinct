import React from 'react';
import { toast } from 'react-toastify';
import { banService } from 'instinct-frontend';
import { UserBanDTO } from 'instinct-interfaces';
import { BanEditor } from '../ban-editor/BanEditor';
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
      <button className="btn btn-primary">
        <i className="fa fa-plus-circle mr-2"/>
        Edit
      </button>
    </BanEditor>
  )
}