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
      </div>
    );
  }
}

export default Header;
