import React, { Component } from 'react';


class PasswordChecked extends React.Component {
  constructor(props) {
    super();
    this.state = {text:''}

    this.handleChange = this.handleChange.bind(this);
    this.checkChar = this.checkChar.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  checkChar = () => {
    return this.state.text.length >= 6;
  }

  checkUpper = () => {
    let userInput = this.state.text;
    for (var i=0; i< userInput.length; i++) {
      if (userInput[i] === userInput[i].toUpperCase()) return true
    }
  }

  checkLower = () => {
    let userInput = this.state.text;
    for (var u=0; u<userInput.length; u++) {
      if (userInput[u] === userInput[u].toLowerCase()) return true
    }
}


render() {
console.log('teee');
  // console.log('Up',this.checkUpper());
  // console.log('low',this.checkLower());
  return (
    <div className="app">
      Task 3<input type="text" placeholder="username" onChange={this.handleChange}/>
      <div className="rules">
        <ul>
          <li className={this.checkChar() ? "passed": "missing"}> Minimum 6 letter</li>
          <li className={this.checkUpper() ? "passed": "missing"}> Minimum 1 Uppercase letter</li>
          <li className={this.checkLower() ? "passed": "missing"}> Minimum 1 Lowercase letter</li>
        </ul>
      </div>
      <button> Submit </button>
    </div>
  );
}
}

// ReactDOM.render(<PasswordChecked/>, document.getElementById('root'))

export default PasswordChecked;
