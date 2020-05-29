/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';

import setResponse from './setResponse';

const renderApp = (initialState, url, manifest, metaTags) => {
  const html = renderToString(<p>Hello World!</p>);
  const preloadedState = {};
  return setResponse(html, preloadedState, manifest, metaTags);
};

export default renderApp;
