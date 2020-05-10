import React from 'react';
import { JumbotronProps } from './';

export function Jumbotron({ className = '', children, style, title }: JumbotronProps) {
  return (
    <header className={`page-header flex-container flex-vertical-center ${className}`} style={style}>
      <div className="page-header-content">
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </header>
  );
}
