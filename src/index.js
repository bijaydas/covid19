import '../public/css/reset.css';
import '../public/css/helper.css';
import '../public/css/flex.css';
import '../public/css/grid.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import path from 'path';

const el = document.createElement('div');
document.body.appendChild(el);

ReactDOM.render(<App />, el);
