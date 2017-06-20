import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Task1 from './Task1';
import Task2 from './Task2';
import PasswordChecked from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';

class App extends Component {

  state  = {
    color: false
  }

  callback(state) {
    this.setState(state);
    // console.log('callback');

  }

  render() {
    // console.log('rendered App');

    return (
      <div className={"App "+this.state.color }>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Task1/>
        <Task2 ref={instance => { this.child = instance} }  callback={this.callback.bind(this)}/>
        <PasswordChecked />
        <Task4/>
        <Task5/>
      </div>
    );
  }
}

  export default App;
