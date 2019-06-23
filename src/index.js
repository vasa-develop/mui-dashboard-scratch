import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import { createHashHistory } from 'history'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import reducers from './redux/reducers'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'

import Router from './router'

const history = createHashHistory()
const routeMiddleware = routerMiddleware(history)
const middlewares = [thunk, routeMiddleware]
if (process.env.NODE_ENV === 'development' && true) {
  middlewares.push(logger)
}
const store = createStore(reducers(history), compose(applyMiddleware(...middlewares)))
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router history={history} />
    </ThemeProvider>
  </Provider>
  ,
  document.querySelector('#root'),
);
