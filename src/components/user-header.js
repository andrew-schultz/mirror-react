import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../app.css';

class UserHeader extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      user: this.props.user
    }
  }

  render() {
    return(
      <div className='nav'>
        <Link className='navlink' to={{ pathname: '/user', state: { user: this.state.user } }} >
          User
        </Link>
        <Link className='navlink' to={{ pathname: '/workout', state: { user: this.state.user } }} >
          New Workout
        </Link>
        <Link className='navlink' to={{ pathname: '/workouts', state: { user: this.state.user } }} >
          Workouts
        </Link>
      </div>
    );
  }
}

export default UserHeader;
