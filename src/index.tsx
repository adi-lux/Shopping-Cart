import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import RouteSwitch from './RouteSwitch';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
);
