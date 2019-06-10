import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/reducers/index";
import CounterAction from "./src/actions/CounterAction";

/**
 * Store - holds the state the is only one state
 * Action - state can be modify using actions - simple object
 * Dispatcher - Action needs to be sent by someone - this is the dispatcher action
 * Reducer - receives the action  modify the state id need and return new state
 *         - pure action
 *         - only mandatory filed is the type
 * Subscriber - listen for the state change to update the ui using connect
 * **/

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <CounterAction />
      </Provider>
    );
  }
}
