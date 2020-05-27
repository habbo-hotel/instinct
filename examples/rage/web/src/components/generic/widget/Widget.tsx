import React from 'react';
import { WidgetProps } from './';
import Draggable from 'react-draggable';

export function Widget({ children }: WidgetProps) {
  return (
    <Draggable>
      <div>{children}</div>
    </Draggable>
  );
}
