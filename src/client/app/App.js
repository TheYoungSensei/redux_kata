import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MainRoutes from '../routes/MainRoutes';


class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,

    currentView: PropTypes.string

  };

  render() {
    return (
      <div id="appContainer">
        <MainRoutes/>
      </div>
    );
  }
}

export default App;
