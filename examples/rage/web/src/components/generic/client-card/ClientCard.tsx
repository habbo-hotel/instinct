import React from 'react';
import './ClientCard.scss';
import { ClientCardProps } from './';

export function ClientCard({ children, header }: ClientCardProps) {
  return (
    <div className="client-card">
      {header && <div className="client-header">{header}</div>}
      {children && <div className="client-children">{children}</div>}
    </div>
  );
}
