import React from 'react';
import { createRoot } from 'react-dom/client';

import './css/main.scss';
import App from './components/App';

createRoot(window.document.getElementById('app')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
