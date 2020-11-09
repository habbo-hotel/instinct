import React from 'react';
import ReactDOM from 'react-dom';
import {InstinctWebRP} from './InstinctWeb';

export async function bootstrapInstinctWebRP() {
  ReactDOM.render(<InstinctWebRP />, document.getElementById('root'));
}
