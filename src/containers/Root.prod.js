import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MyApp from './CounterApp';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
