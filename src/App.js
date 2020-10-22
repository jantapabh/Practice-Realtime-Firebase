import React, { Component } from 'react';
import fire from './fire'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import FormInputIn from './FormInputIn'


class App extends Component {

  render() {
    return (
      <div className="app">
     <FormInputIn />
      </div >
    );
  }
}

export default App;