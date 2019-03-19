/* global module process */
import React from 'react';
import {render, hydrate} from 'react-dom';

import App from '/entry/app';

const ConcurrentMode = React.unstable_ConcurrentMode;

const isDev = process.env.NODE_ENV === 'development';

const renderFn = isDev ? render : hydrate;

const renderApp = () =>
  renderFn(
    <ConcurrentMode>
      <App />
    </ConcurrentMode>,
    document.getElementById('root'),
  );

renderApp();

if (module.hot) {
  module.hot.accept();
}
