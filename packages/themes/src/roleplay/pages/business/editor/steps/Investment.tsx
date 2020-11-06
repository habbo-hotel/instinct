import React from 'react';
import {FormGroup} from 'reactstrap';
import {Icon} from '@instinct-prj/frontend';

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
        <div className="row" style={{fontSize: 20}}>
          <div className="col-4">$</div>
          <div className="col-4 text-center " style={{fontWeight: 500}}>
            $100
          </div>
          <div className="col-4 text-right">$$</div>
        </div>
        <input type="range" className="form-control-range" />
      </FormGroup>
    </>
  );
}
