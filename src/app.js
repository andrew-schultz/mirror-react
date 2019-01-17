import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header.js';
import UserHeader from './components/user-header.js';
import Register from './views/register.js';
import User from './views/user.js';
import Workouts from './views/workouts';
import NewWorkout from './views/workout';

function CurrentHeader(props) {
  const isLoggedIn = props.isLoggedIn;

  if ( isLoggedIn ) {
    return <UserHeader />;
  }

  return <Header />;
};

class App extends Component{
  constructor( props ) {
    super( props );
    this.state = { user: null };
  }

  render() {
    return(
      <Router>
        <div>
          <CurrentHeader isLoggedIn={ this.state.user } />

          <Route path='/register' component={ Register } />
          <Route path='/user' component={ User } />
          <Route path='/workout' component={ NewWorkout } />
          <Route path='/workouts' component={ Workouts } />
        </div>
      </Router>
    )
  }
}

export default hot( module )( App );
