import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

export class Decrement extends PureComponent {
  render() {
    const { decrement } = this.props;
    return(
      <Button
        type="danger"
        onClick={decrement}
      >DECREMENT</Button>
    );
  }
}

Decrement.propTypes = {
  decrement: PropTypes.func.isRequired
};
