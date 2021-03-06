import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import reducer from '../modules/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
// import createHistory            from 'history/createBrowserHistory';

export const history = createHistory();

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history)
  )
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
