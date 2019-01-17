import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserHeader from '../components/user-header.js';
import WorkoutForm from '../components/workout-form.js';

class NewWorkout extends Component{
  constructor( props ) {
    super( props );

    var user = this.props.location.state.user;

    this.state = {
      user: user
    }
  }

  render() {
    return(
      <div>
        <UserHeader user={ this.state.user } />

        <h1 className='title'>New Workout</h1>
        <WorkoutForm user={ this.state.user } />
      </div>
    )
  }
}

export default hot( module )( NewWorkout );
