import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUpForm from '../components/sign-up-form.js';
import Header from '../components/header.js';
import '../app.css';

class Register extends Component{
  render() {
    return(
      <div>
        <Header />
        <h1 className='title' >REGISTER</h1>
        <SignUpForm />
      </div>
    )
  }
}

export default hot( module )( Register );
