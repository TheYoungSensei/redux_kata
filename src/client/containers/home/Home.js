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
    leaveHome: PropTypes.func.isRequired,

    counter: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,

    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    double: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {enterHome} = this.props;
    enterHome();
  }

  componentWillUnmount() {
    const {leaveHome} = this.props;
    leaveHome();
  }

  onIncrement = () => {
    const {increment} = this.props;
    increment();
  };

  onDecrement = () => {
    const {decrement} = this.props;
    decrement();
  };

  onDouble = () => {
    const {double} = this.props;
    double();
  };

  render() {
    const { counter, loading } = this.props;
    return (
      <Counter value={counter} increment={this.onIncrement} decrement={this.onDecrement} double={this.onDouble} loading={loading}/>
    );
  }
}

export default Home;
