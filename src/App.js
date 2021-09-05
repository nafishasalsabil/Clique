import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import ForgotPass from './Pages/ForgotPassword'
import NotFound from './Pages/NotFound'
import {BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  BrowserRouter} from "react-router-dom"


class App extends Component{
  render(){
    return <BrowserRouter>
    <Router>
      <Switch>
      <Route exact path="/" component={Signin}></Route>
      <Route exact path="/Signup" component={Signup}></Route>
      <Route exact path="/ForgotPassword" component={ForgotPass}></Route>
      <Route component={NotFound}></Route>
      <Redirect to ="/NotFound" />
      </Switch>
    </Router>
    </BrowserRouter> 
  }
 
}

export default App;
