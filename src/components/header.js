import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../app.css';

class Header extends Component {
  render() {
    return(
      <div className='nav' >
        <Link className='navlink' to='/'>
          Home
        </Link>
        <Link className='navlink' to='/login'>
          Login
        </Link>
        <Link className='navlink' to='/register'>
          Register
        </Link>
      </div>
    );
  }
}

export default Header;
