import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NewWorkout extends Component{
  render() {
    return(
      // <Router>
        // <div>
          // <Header />

          <h1>Workout</h1>
          // <Route path="/" component={ App } />
        // </div>
      // </Router>
    )
  }
}

export default hot( module )( NewWorkout );
