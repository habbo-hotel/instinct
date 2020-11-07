import React, {useContext} from 'react';
import {sessionContext} from '@instinct-prj/frontend';
import {businessEditorContext} from '../../context';

export function InvestmentSlider() {
  const {user} = useContext(sessionContext);
  const {business, setBusiness} = useContext(businessEditorContext);

  return (
    <>
      <div className="row" style={{fontSize: 20}}>
        <div className="col-4">$</div>
        <div className="col-4 text-center " style={{fontWeight: 500}}>
          ${business.investment}
        </div>
        <div className="col-4 text-right">${user!.credits}</div>
      </div>
      <input
        type="range"
        className="form-control-range"
        value={business.investment}
        onChange={e => setBusiness('investment', Number(e.target.value))}
        min={0}
        max={user!.credits}
      />
    </>
  );
}
