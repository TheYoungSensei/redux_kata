import {
  INCREMENT,
  DECREMENT,
  DOUBLE_ASYNC,
  DOUBLE_ASYNC_SUCCESS
} from '../actions/counter';

const initialState = {
  value: 0,
  loading: false
};

export default function (
  state = initialState,
  action
) {
  switch(action.type) {
  case INCREMENT:
    return {
      ...state,
      value: state.value+1
    };
  case DECREMENT:
    return {
      ...state,
      value: state.value-1
    };
  case DOUBLE_ASYNC:
    return {
      ...state,
      loading: true
    };
  case DOUBLE_ASYNC_SUCCESS:
    return {
      ...state,
      value: action.payload,
      loading: false
    };
  default:
    return state;
  }
}
