import React from 'react';
import './BusinessRow.scss';
import { BusinessRowProps } from './';
import { Link } from 'react-router-dom';
import { BusinessBadge } from '../business-badge';

export function BusinessRow({ business }: BusinessRowProps) {
  return (
    <Link to={`/businesses/${business.id}`}>
      <BusinessBadge business={business}/>
      <div className="user-count">{business.totalEmployees}</div>
      <div className="name">{business.name}</div>
      <div className="desc">{business.desc}</div>
    </Link>
  )
}