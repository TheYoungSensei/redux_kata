// @flow weak

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as viewsActions from '../../redux/actions/views';
import * as counterActions from '../../redux/actions/counter';
import Home from './Home';


const mapStateToProps = (state) => {
  return {
    // views
    currentView: state.views.currentView,
    counter: state.counter.value,
    loading: state.counter.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // views
      enterHome: viewsActions.enterHome,
      leaveHome: viewsActions.leaveHome,
      increment: counterActions.increment,
      decrement: counterActions.decrement,
      double: counterActions.doubleAsync
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
