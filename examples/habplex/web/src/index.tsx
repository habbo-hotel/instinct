import './pages';
import React from 'react';
import { App } from './App';
import ReactDOM from 'react-dom';

import 'instinct-frontend/index.scss';
import './override.scss';

ReactDOM.render(<App />, document.getElementById('root'));