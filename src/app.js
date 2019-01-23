import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './app.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Header from './components/header.js';
import UserHeader from './components/user-header.js';
import Landing from './views/landing.js';
import Login from './views/login.js';
import Register from './views/register.js';
import User from './views/user.js';
import Workouts from './views/workouts';
import NewWorkout from './views/workout';


class App extends Component{
  render() {
    return(
      <Router>
        <div className='app'>
          <Route exact path='/' component={ Landing } />
          <Route path='/login' component={ Login } />
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
