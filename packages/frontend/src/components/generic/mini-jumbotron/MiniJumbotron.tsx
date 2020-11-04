import React from 'react';
import './MiniJumbotron.scss';
import {ComponentProps} from '../../common.types';

export function MiniJumbotron({children}: ComponentProps) {
  return <div className="mini-jumbotron">{children}</div>;
}
