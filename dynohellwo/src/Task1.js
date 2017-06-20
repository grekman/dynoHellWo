import React, { Component } from 'react';

class Task1 extends Component {
  state  = {
    show: false
  }

  inputSomeText = (balumba) => {
    balumba.preventDefault();

    // if(e.target.value){
      this.setState({show: balumba.target.value.trim()})
    // }
  }



  render () {

    // console.log(this);



    return (

      <div>
        Task 1 <input type="text" onInput={this.inputSomeText} placeholder="type Hello World!" />
        <br/>
        You typed:<p className="out">"Hello, {this.state.show ? this.state.show : "stranger"}!"</p>
      </div>

    )

  }


}
export default Task1;
