import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';

export class Double extends PureComponent {
  render() {
    const { loading, double } = this.props;
    return(
      <Button
        loading={loading}
        type="primary"
        onClick={double}
      >DOUBLE (ASYNC)</Button>
    );
  }
}
Double.propTypes = {
  double: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
