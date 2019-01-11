import React, { Component } from 'react';

class Temperature extends React.Component{
    constructor(props){
        super(props);
        this.onChangeTextInputHandle = this.onChangeTextInputHandle.bind(this);
    }

    onChangeTextInputHandle(event){
        let value = event.target.value; 
        // alert('onChangeTextInputHandle value: '+value)
        this.props.onTemperatureChange(value);

    }

    render(){
        return(
            <div>
                <h3>Enter input in Celcius: </h3>
                <input value={this.props.value} onChange={this.onChangeTextInputHandle}/>
            </div>

        );
    }
}

export default Temperature;