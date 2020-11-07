import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {businessEditorContext} from '../context';
import {Icon, Input} from '@instinct-prj/frontend';

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
            <img
              src="https://game.peakrp.com/habbo-imaging/badge/police.gif"
              style={{
                background: '#0F406B',
                border: '2px solid white',
                borderRadius: '100%',
                marginTop: 15,
                padding: 5,
              }}
            />
          </div>
        </div>
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
    </>
  );
}
