import React from 'react';
import { App } from './App';
import ReactDOM from 'react-dom';

import 'instinct-frontend/index.scss';
import './override.scss';

function Web() {
  return (
    <App/>
  )
}

ReactDOM.render(<Web />, document.getElementById('root'));