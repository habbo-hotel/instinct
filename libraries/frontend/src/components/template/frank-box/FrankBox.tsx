import './FrankBox.scss';
import React from 'react';
import { FrankBoxProps } from './';

export function FrankBox({ children, className = '', title }: FrankBoxProps) {
  return (
    <div className={`frank-box ${className}`}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}
