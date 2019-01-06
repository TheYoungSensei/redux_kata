import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import views from '../reducers/views';
import counter from '../reducers/counter';

export const reducers = {
  views,
  counter
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
