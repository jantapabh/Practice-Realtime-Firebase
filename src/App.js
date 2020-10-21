import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';


class App extends Component {
  state = {
    text: ""
  }

  handleText = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    let massageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    fire.database().ref('messages').push(this.state.text)
    this.setState({
      text: ""
    })

  }


  render() {
    return (
      <div className="App-header">
        <input type="text" id="inputText" onChange={this.handleText} id="inputText" />
        <button onClick={this.handleSubmit}>Save</button>
      </div>
    )
  }
}


export default App;
