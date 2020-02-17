import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { GlobalStyle } from 'omtv-theme';

import App from './app';

ReactDOM.render(<>
  <GlobalStyle />
  <App />
</>, document.getElementById('app'));
