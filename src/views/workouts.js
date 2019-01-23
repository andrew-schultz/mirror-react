import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserHeader from '../components/user-header.js';
import WorkoutDiv from '../components/workout.js';
import axios from 'axios';

class Workouts extends Component{
  constructor( props ) {
    super( props );

    var user = this.props.location.state.user;

    this.state = {
      user: user,
      workouts: []
    }
  }

  componentDidMount() {
    axios.get( `http://localhost:3000/workouts?user_id=${ this.state.user.id }`,
      { headers: { 'TOKEN': this.state.user.token } } )
      .then( result => {
        if ( result.status == 200 ) {
          const workouts = result.data.workouts
          this.setState( { workouts } );
        }
      }
    )
  }

  render() {
    const workouts = this.state.workouts;

    return(
      <div>
        <UserHeader user={ this.state.user }/>

        <h1 className='title'>Workouts</h1>
        { workouts.map( workout =>
          <WorkoutDiv key={ workout.id } workout={ workout } exercises={ workout.exercises } />
        ) }
      </div>
    )
  }
}

export default hot( module )( Workouts );
