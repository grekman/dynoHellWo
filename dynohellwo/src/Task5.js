import React, { Component } from 'react';

class Task5 extends Component {

  state = {

      part: 25

  }

  risePart = () => {
    if (this.state.part == 100) return
    else this.setState({part: this.state.part + 5})
  }




  render() {
    return (
      <div className="scale"> Task 5
       <div className="outline">
         <div className="inline" style={{width : this.state.part + '%'}}>{this.state.part}</div>
       </div>
       <button className="plus" onClick={this.risePart} > + </button>
     </div>
    );
  }
}

export default Task5;
