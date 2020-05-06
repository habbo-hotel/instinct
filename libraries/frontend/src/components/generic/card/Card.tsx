import React from 'react';
import { Icon } from '../';
import { CardProps } from './index';

export function Card(props: CardProps) {
  const { className = '', children, subHeader, header, icon } = props;
  return (
    <article className={`default-section ${className}`}>
      {header && (
        <div className="aside-title">
          {icon && <Icon type={icon} />}
          <h3>{header}</h3>
          <p>{subHeader}</p>
        </div>
      )}
      <div className="aside-content">{children}</div>
    </article>
  );
}
