import React, { Component } from 'react';

class Clock extends Component{
    constructor(props){
      super(props);
      this.state = {
        date : new Date(),
      };
      this.tick = this.tick.bind(this);
    }
    componentDidMount(){
      // this.ClockID = setInterval(() => this.tick(), 1000);
      this.ClockID = setInterval(this.tick, 1000);
    }
    componentWillUnmount(){
      clearInterval(this.ClockID);
    }
    tick(){
      let new_Date = new Date();
      this.setState({date : new_Date});
    }
    render(){
      return(
        <div>
            <h1>Clock Component</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }


export default Clock;

  