import { BusinessRowProps } from './';
import { Link } from 'react-router-dom';
import { RowContainer } from 'components';
import React, { useContext } from 'react';
import { ConfigContext } from 'instinct-frontend';

export function BusinessRow({ business }: BusinessRowProps) {
  const configContext = useContext(ConfigContext);
  return (
    <Link style={{ textDecoration: 'none' }} to={`/businesses/${business.id!}`}>
      <RowContainer image={`${configContext.siteLink}/swfs/assets/c_images/corp-badges/${business.badge}.gif`} header={business.name} users={business.totalEmployees}>
        <p>{business.desc}</p>
        <p style={{ marginTop: -20 }}>Owned by <b>{business.owner.username}</b></p>
      </RowContainer>
    </Link>
  )
}