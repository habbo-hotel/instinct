import React from 'react';
import {FormGroup} from 'reactstrap';
import {Icon} from '@instinct-prj/frontend';
import {InvestmentSlider} from './investment-slider/InvestmentSlider';

export function InvestmentStep() {
  return (
    <>
      <h2>
        <Icon type="money-check-edit" />
        Investment
      </h2>
      <FormGroup>
        <h3>Transfer to Business Account</h3>
        <p style={{marginTop: -10}}>
          How much money would you like to transfer to your new business?
        </p>
        <div className="alert alert-warning">
          <b>Notice: </b>
          <p>
            Your business will automatically pause all operations when your
            balance hits zero! Always ensure your business' finances are taken
            care of.
          </p>
        </div>
        <InvestmentSlider />
      </FormGroup>
    </>
  );
}
