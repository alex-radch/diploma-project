import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import configureStore from './store';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import './index.css';

import reducer from './reducers';

const supportsHistory = 'pushState' in window.history; // is true for browsers that support the HTML5 history API
const browserHistory = createBrowserHistory({
  basename: '/',
  forceRefresh: !supportsHistory
});

const store = configureStore(browserHistory, reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
