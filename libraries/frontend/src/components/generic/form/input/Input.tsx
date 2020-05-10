import './Input.scss';
import { InputProps } from './';
import React, { ChangeEvent } from 'react';

export function Input(props: InputProps) {
  function onChange(event: ChangeEvent<HTMLInputElement>): void {
    if (props.onChange) {
      props.onChange(props.name, event.target.value);
    }
  }

  return <input {...props} className="rounded-input" onChange={onChange} />;
}
