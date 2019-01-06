import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Increment} from './increment/Increment';
import {Decrement} from './decrement/Decrement';
import {Double} from './double/Double';

import './Counter.scss';

export class Counter extends PureComponent {
  render() {
    const {
      value,
      increment,
      decrement,
      double,
      loading
    } = this.props;
    return(
      <div>
        <p>Counter value : {value}</p>
        <Increment  increment={increment}/>
        <Decrement  decrement={decrement}/>
        <Double double={double} loading={loading}/>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  double: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
