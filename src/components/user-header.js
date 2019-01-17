import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../app.css';

// const linkStyle = {
//   marginRight: 15
// }

class Header extends Component {
  render() {
    return(
      <div>
        <Link to='/user'>
          User
        </Link>
        <Link to='/workout'>
          New Workout
        </Link>
        <Link to='/workouts'>
          Workouts
        </Link>
      </div>
    );
  }
}

export default Header;
