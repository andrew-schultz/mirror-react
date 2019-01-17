import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Landing extends Component{
  render() {
    return(
      <div>
        <h1 className='title'>Workout Manager</h1>
        <Link className='cleanLink' to='/register' >
          <div className='registerButton'>
            Register
          </div>
        </Link>
      </div>
    )
  }
}

export default hot( module )( Landing );
