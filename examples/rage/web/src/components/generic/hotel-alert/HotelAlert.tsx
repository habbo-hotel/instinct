import React from 'react';
import './HotelAlert.scss';
import { HotelAlertProps } from './';

export function HotelAlert({ children, style, title, onToggle }: HotelAlertProps) {
  return (
    <div className="hotel-alert" style={{ width: 600, ...style }}>
      <div className="header">
        <div className="title">{title}</div>
        <div className="close" onClick={onToggle} />
      </div>
      <div className="body">{children}</div>
    </div>
  );
}
