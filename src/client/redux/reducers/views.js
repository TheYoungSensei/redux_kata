import {
  ENTER_HOME_VIEW,
  LEAVE_HOME_VIEW
} from '../actions/views';

const initialState = {
  currentView: 'not set',
  enterTime: null,
  leaveTime: null
};

export default function (state = initialState, action) {
  switch (action.type) {
  case ENTER_HOME_VIEW:
    // We cannot renter on the current view.
    if (state.currentView !== action.currentView) {
      return {
        ...state,
        currentView: action.currentView,
        enterTime: action.enterTime,
        leaveTime: action.leaveTime
      };
    }
    return state;

  case LEAVE_HOME_VIEW:
    // We cannot leave an already left view.
    if (state.currentView === action.currentView) {
      return {
        ...state,
        currentView: action.currentView,
        enterTime: action.enterTime,
        leaveTime: action.leaveTime
      };
    }
    return state;

  default:
    return state;
  }
}
