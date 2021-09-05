import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sigin from './Pages/Signin'
import Sigup from './Pages/Signup'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Sigup></Sigup>
      </div>
    );
  }
 
}

export default App;
