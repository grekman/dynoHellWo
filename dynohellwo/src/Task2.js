import React, { Component } from 'react';

class Task1 extends Component {

  changeBackground = (e) => {
    e.preventDefault();

    // this.setState({color: e.target.innerHTML});
    this.props.callback({color: e.target.innerHTML});

  }


  render () {



    return (

      <div className="task2"> Task 2
        <button className="yellow" onClick={this.changeBackground}>yellow</button>
        <button className="green" onClick={this.changeBackground}>green</button>
        <button className="red" onClick={this.changeBackground}>red</button>
        <button className="blue" onClick={this.changeBackground}>blue</button>
        <button className="orange" onClick={this.changeBackground}>orange</button>
      </div>

    )

  }


}
export default Task1;
