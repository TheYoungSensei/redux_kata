/* eslint-disable no-undef */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import {Counter} from '../../components/counter/Counter';

import styles from './home.scss';

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
      <Layout.Content className={styles.padded}>
        <h1>Redux Kata</h1>
        <h5>Introduction</h5>
        <p>For this small kata, you would have to implement a "simple" counter. This counter should be able to : </p>
        <h5>Specifications</h5>
        <ul>
          <li>Display its current value.</li>
          <li>Increment its value by one.</li>
          <li>Decrement its value by one.</li>
          <li>Double its value but with a delay of 5 seconds. Do not forget to take care of
            your user by giving him a loading feedback :).</li>
        </ul>
        <p>For this kata the purpose is to test the Redux ecosystem.
          So this counter should be implemented in Redux. Thus you should have in your code : </p>
        <ul>
          <li>An action per event.</li>
          <li>A reducer to handle those actions.</li>
          <li>Some components to display the value of the counter and to increment/decrement/double it.</li>
          <li>A container to display the components and handle the events.</li>
        </ul>
        <p>For this kata, you also have to follow the Smart / Dumb components rule.</p>
        <p>More information about Redux can be found <a href="https://redux.js.org/">here</a></p>
      </Layout.Content>
    );
  }
}

export default Home;
