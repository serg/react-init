import React from 'react';
import { render } from 'react-dom';

import './css/main.scss';
import App from './components/App';

render(<App/>, window.document.getElementById('app'));

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
