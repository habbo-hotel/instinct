import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {Icon} from '@instinct-prj/frontend';
import {businessEditorContext} from '../context';
import {BadgeEditorModal} from './badge-editor-modal';
import {AddPositionModal} from './add-position-modal';
import {JobPositionsTable} from './job-positions-table';
import {InvestmentSlider} from './investment-slider/InvestmentSlider';

export function ReviewStep() {
  const {business, setBusiness} = useContext(businessEditorContext);
  return (
    <>
      <div>
        <h2>Review</h2>
        <p style={{marginTop: -15}}>
          Please take a moment to review your business and make changes as
          necessary.
        </p>
      </div>
      <div className="mt-3">
        <h3>
          <Icon type="file-certificate" />
          Details
        </h3>
        <FormGroup>
          <div className="row">
            <div className="col-8">
              <h4>Business Name</h4>
              <input
                className="form-control"
                type="text"
                value={business.name}
                onChange={e => setBusiness('name', e.target.value)}
              />
            </div>
            <div className="col-4">
              <BadgeEditorModal />
            </div>
          </div>
        </FormGroup>
        <FormGroup className="mt-3">
          <h3>
            <Icon type="users" />
            Job Positions
          </h3>
          <JobPositionsTable />
          <AddPositionModal />
        </FormGroup>
        <FormGroup className="mt-3">
          <h3>
            <Icon type="money-check-edit" />
            Investment
          </h3>
          <InvestmentSlider />
        </FormGroup>
      </div>
    </>
  );
}
