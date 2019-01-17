import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUpForm from '../components/sign-up-form.js';

class Register extends Component{
  render() {
    return(
      <div>
        <h1>REGISTER</h1>
        <SignUpForm />
      </div>
    )
  }
}

export default hot( module )( Register );
