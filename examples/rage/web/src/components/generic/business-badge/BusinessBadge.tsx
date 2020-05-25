import { BusinessBadgeProps } from './';
import React, { useContext } from 'react';
import { ConfigContext } from 'instinct-frontend';

export function BusinessBadge({ business }: BusinessBadgeProps) {
  const configContext = useContext(ConfigContext);
  return (
    <div
      className="business-row"
      style={{ background: `url(${configContext.siteLink}/swfs/assets/c_images/corp-badges/${business.badge}.gif) 10px no-repeat` }}
    />
    )
}