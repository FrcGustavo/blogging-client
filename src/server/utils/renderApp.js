/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import serverRoutes from '../../frontend/routes/serverRoutes';

import setResponse from './setResponse';

const renderApp = (initialState, url, manifest, metaTags) => {
  const html = renderToString(
    <StaticRouter location={url} context={{}}>
      { renderRoutes(serverRoutes) }
    </StaticRouter>,
  );
  const preloadedState = {};
  return setResponse(html, preloadedState, manifest, metaTags);
};

export default renderApp;
