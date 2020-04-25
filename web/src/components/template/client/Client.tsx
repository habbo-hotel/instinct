import './Client.scss';
import React from 'react';
import { ClientActions } from './client-actions';
import { ClientContainer } from './client-container';

export function Client() {
  return (
    <div className="hotel-container">
      <ClientActions/>
      <ClientContainer/>
    </div>
  )
}