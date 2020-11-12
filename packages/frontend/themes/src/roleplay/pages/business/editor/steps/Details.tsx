import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {businessEditorContext} from '../context';
import {BadgeEditorModal} from './badge-editor-modal';
import {HomeRoomSelector} from './home-room-selector';
import {BusinessType} from '@instinct-prj/interface-rp';
import {Icon, Input, Select} from '@instinct-prj/frontend';

export const BUSINESS_TYPES = Object.keys(BusinessType).map(_ => ({
  label: _,
  value: _,
}));

export function DetailsStep() {
  const {business, setBusiness} = useContext(businessEditorContext);
  return (
    <>
      <h2>
        <Icon type="file-certificate" />
        Details
      </h2>
      <FormGroup className="mt-3" style={{padding: 2}}>
        <div className="row">
          <div className="col-8">
            <h4>Business Name</h4>
            <Input
              type="text"
              name="name"
              onChange={setBusiness}
              value={business.name}
            />
          </div>
          <div className="col-4">
            <BadgeEditorModal />
          </div>
        </div>
      </FormGroup>
      <FormGroup className="mt-3" style={{padding: 2}}>
        <h4>Home Room</h4>
        <HomeRoomSelector />
      </FormGroup>
      <FormGroup className="mt-3" style={{padding: 2}}>
        <h4>Business Description</h4>
        <textarea
          className="form-control"
          rows={5}
          onChange={e => setBusiness('desc', e.target.value)}
          value={business.desc}
        />
      </FormGroup>
      <FormGroup className="mt-3" style={{padding: 2}}>
        <h4>Business Type</h4>
        <Select
          options={BUSINESS_TYPES}
          value={BUSINESS_TYPES.find(_ => _.value === business.type) ?? null}
          onChange={(_: any) => setBusiness('type', _.value)}
        />
      </FormGroup>
    </>
  );
}
