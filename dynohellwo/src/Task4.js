import React, { Component } from 'react';

class Task4 extends Component {

  state = {

      seconds: 0

  }

  componentDidMount = () => {
    this.timer = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({seconds: this.state.seconds + 1});
  }

  restart = () => {
    clearInterval(this.timer);
    this.setState({seconds : 0});
    this.timer = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    this.setState({
      seconds: this.state.seconds });
      clearInterval(this.timer);
  }



  render() {
    return (
      <div className="timer"> Task 4
       <p>Прошло {this.state.seconds} секунд</p>
       <button onClick={this.restart} >RESTART</button><button onClick={this.componentWillUnmount}>STOP</button>
      </div>
    );
  }
}

export default Task4;
