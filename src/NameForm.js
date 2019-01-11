import React, { Component } from 'react';

class NameForm extends Component{
    constructor(props){
      super(props);
      this.state = {
        value: null,
        textArea: "Please write an essay about your favorite DOM element.",
      }
      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
      this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    }
  
    handleOnChange(event){
      let value = event.target.value;
      // alert("on change:" + value);
      this.setState({value: value});
    }
  
    handleOnSubmit(event){
      alert('text was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    handleChangeTextArea(event){
      let value = event.target.value;
      this.setState({textArea: value});
    }
  
    render(){
      return(
          <div>
            <h1>Name and Text Form Component</h1>
            <form onSubmit={this.handleOnSubmit}>
            <label>Name: 
                <input type="text" value={this.state.value} onChange={this.handleOnChange}/>
            </label>
            <div><br/></div>
            <label>
                Essay:
                <textarea value={this.state.textArea} onChange={this.handleChangeTextArea} />
            </label>
            <div></div>
            <input type="submit" value="Submit" />
            </form>
          </div>
      );
    }
  } 


  export default NameForm;