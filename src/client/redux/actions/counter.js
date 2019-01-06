export const INCREMENT = '@counter/INCREMENT';
export const DECREMENT = '@counter/DECREMENT';
export const DOUBLE_ASYNC = '@counter/DOUBLE_ASYNC';
export const DOUBLE_ASYNC_SUCCESS = '@counter/DOUBLE_ASYNC_SUCCESS';

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

export function doubleAsync() {
  return (dispatch, getState) => {
    dispatch({
      type: DOUBLE_ASYNC
    });
    const state = getState();
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: DOUBLE_ASYNC_SUCCESS,
          payload: state.counter.value*2
        });
        resolve();
      }, 500);
    });
  };
}
