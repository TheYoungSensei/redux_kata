import moment from 'moment';

const dateFormat = 'DD/MM/YYYY HH:mm';

export const ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
export const LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';

export function enterHome(time = moment().format(dateFormat)) {
  return {
    type: ENTER_HOME_VIEW,
    currentView: 'home',
    enterTime: time,
    leaveTime: null
  };
}

export function leaveHome(time = moment().format(dateFormat)) {
  return {
    type: LEAVE_HOME_VIEW,
    currentView: 'home',
    enterTime: null,
    leaveTime: time
  };
}
