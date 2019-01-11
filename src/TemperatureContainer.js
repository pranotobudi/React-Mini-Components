import React, { Component } from 'react';
import Temperature from './Temperature'
class TemperatureContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temp: null,
        }

        this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    }


    handleTemperatureChange(temp){
        // alert('handleTemperatureChange temp: '+temp)
        this.setState({temp: temp})
    }

    render(){
        return(
            <div>
                <h1>TemperatureContainer Component</h1>
                <Temperature value={this.state.temp} onTemperatureChange={this.handleTemperatureChange}/>
                <div>
                    <h3>MIRROR - passing value between component-</h3>
                </div>
                <Temperature value={this.state.temp} onTemperatureChange={this.handleTemperatureChange}/>
            </div>
        );
    }
}

export default TemperatureContainer;