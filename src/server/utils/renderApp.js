/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { createStore } from 'redux';

import TemplateBlogApp from '../../frontend/components/templates/TemplateBlogApp';
import reducer from '../../frontend/reducers/index';
import serverRoutes from '../../frontend/routes/serverRoutes';

import setResponse from './setResponse';

const renderApp = (initialState, url, manifest, metaTags) => {
  const store = createStore(reducer, initialState);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={{}}>
        <TemplateBlogApp>
          { renderRoutes(serverRoutes) }
        </TemplateBlogApp>
      </StaticRouter>
    </Provider>,
  );
  const preloadedState = store.getState();
  return setResponse(html, preloadedState, manifest, metaTags);
};

export default renderApp;
