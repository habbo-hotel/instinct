import React from 'react';
import {Link} from 'wouter';
import {Skeleton} from '@instinct-prj/frontend';
import {EmploymentBlockProps} from './EmploymentBlock.types';

export function EmploymentBlock({
  badge,
  name,
  position,
  link = '',
}: EmploymentBlockProps) {
  return (
    <Link to={link}>
      <div className="row employment-block">
        <div className="d-inline">
          {badge ? (
            <img src={badge!} />
          ) : (
            <Skeleton circle height={60} width={60} />
          )}
        </div>
        <div className="d-inline ml-3">
          <h3 style={{textTransform: 'uppercase', marginTop: 10}}>
            {position ?? <Skeleton width={220} />}
          </h3>
          <h6 style={{marginTop: -10}}>{name ?? <Skeleton width={220} />}</h6>
        </div>
      </div>
    </Link>
  );
}
