import React from 'react';
import {FormGroup} from 'reactstrap';
import {Input} from '@instinct-prj/frontend';

export function DetailsStep() {
  return (
    <>
      <FormGroup>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Business Name</h4>
          <Input type="text" name="name" onChange={() => {}} value="" />
        </div>
      </FormGroup>
      <FormGroup>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Business Description</h4>
          <textarea className="form-control" rows={5} />
        </div>
      </FormGroup>
    </>
  );
}
