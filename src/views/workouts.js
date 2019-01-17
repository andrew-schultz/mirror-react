import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Workouts extends Component{
  render() {
    return(
      // <Router>
        // <div>
          // <Header />

          <h1>Workouts</h1>
          // <Route path="/" component={ App } />
        // </div>
      // </Router>
    )
  }
}

export default hot( module )( Workouts );
