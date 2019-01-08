import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

export class Increment extends PureComponent {
  render() {
    const { increment } = this.props;
    return(
      <Button
        type="primary"
        onClick={increment}
      >INCREMENT</Button>
    );
  }
}

Increment.propTypes = {
  increment: PropTypes.func.isRequired
};
