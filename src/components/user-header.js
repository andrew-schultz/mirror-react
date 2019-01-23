import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../app.css';

class UserHeader extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return(
      <div className='nav'>
        <Link className='navlink' to={{ pathname: '/user', state: { user: this.props.user } }} >
          User
        </Link>
        <Link className='navlink' to={{ pathname: '/workout', state: { user: this.props.user } }} >
          New Workout
        </Link>
        <Link className='navlink' to={{ pathname: '/workouts', state: { user: this.props.user } }} >
          Workouts
        </Link>
        <Link className='navlink' to={{ pathname: '/' }} >
          Log Out
        </Link>
      </div>
    );
  }
}

export default UserHeader;
