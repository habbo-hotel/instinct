import React from 'react';
import { UserBanDTO } from 'instinct-interfaces';
import { BanEditor } from '../ban-editor/BanEditor';

export function CreateBanModal() {
  async function onSave(banDTO: UserBanDTO) {

  }

  return (
    <BanEditor onSave={onSave}>
      <button className="btn btn-primary">
        <i className="fa fa-plus-circle mr-2"/>
        New
      </button>
    </BanEditor>
  )
}