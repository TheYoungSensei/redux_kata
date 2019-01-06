import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';

import createHistory from 'history/createHashHistory';
import thunkMiddleware from 'redux-thunk';
import reducer from '../modules/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
// import createHistory            from 'history/createBrowserHistory';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

export const history = createHistory();

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    loggerMiddleware // logger at the end
  )
);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default)
    );
  }
  return store;
}
