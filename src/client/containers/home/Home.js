/* eslint-disable no-undef */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Counter} from '../../components/counter/Counter';

class Home extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    currentView: PropTypes.string.isRequired,
    enterHome: PropTypes.func.isRequired,
    leaveHome: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {enterHome} = this.props;
    enterHome();
  }

  componentWillUnmount() {
    const {leaveHome} = this.props;
    leaveHome();
  }

  render() {
    return (
      <div>Implement counter.</div>
    );
  }
}

export default Home;
