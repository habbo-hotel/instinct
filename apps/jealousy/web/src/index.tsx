import './pages';
import React from 'react';
import { App } from './App';
import ReactDOM from 'react-dom';

import 'react-toastify/dist/ReactToastify.css';
import 'react-toggle/style.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '@instinct/frontend';
import './index.scss';

console.log(process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY);


ReactDOM.render(<App />, document.getElementById('root'));