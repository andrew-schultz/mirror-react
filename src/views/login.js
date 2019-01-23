import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginForm from '../components/login-form.js';
import Header from '../components/header.js';
import '../app.css';

class Login extends Component{
  render() {
    return(
      <div>
        <Header />
        <h1 className='title' >Login</h1>
        <LoginForm />
      </div>
    )
  }
}

export default hot( module )( Login );
