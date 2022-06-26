import React from 'react';
import { createRoot } from 'react-dom/client';

import './css/main.scss';
import App from './components/App';

createRoot(window.document.getElementById('app')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
