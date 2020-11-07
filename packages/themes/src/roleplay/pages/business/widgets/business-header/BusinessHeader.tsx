import React from 'react';
import {Business} from '@instinct-prj/interface-rp';
import {MiniJumbotron, Skeleton} from '@instinct-prj/frontend';

export function BusinessHeader({business}: {business?: Business}) {
  return (
    <MiniJumbotron>
      <div className="row">
        <div className="col-8">
          <h1>{business?.name ?? <Skeleton width={200} />}</h1>
          <p>{business?.desc ?? <Skeleton width={200} />}</p>
        </div>
        <div className="col-4 text-right">
          {business?.badge ? (
            <img
              src={`/img/corps/${business.badge}.gif`}
              style={{marginTop: 10, height: 80}}
            />
          ) : (
            <Skeleton circle width={80} height={80} />
          )}
        </div>
      </div>
    </MiniJumbotron>
  );
}
