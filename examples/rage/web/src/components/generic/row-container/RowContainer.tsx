import React from 'react';
import './RowContainer.scss';
import { RowContainerProps } from './';

export function RowContainer({ children, header, image, users, style }: RowContainerProps) {
  return (
    <div className="row-container" style={{ background: `url(${image}) 10px no-repeat`, ...style }}>
      <div className="user-count">{users}</div>
      <div className="name">{header}</div>
      <div className="desc">{children}</div>
    </div>
  )
}