import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AccountEditForm from '../components/account-edit-form.js';
import UserHeader from '../components/user-header.js';

class User extends Component{
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
        <h1 className='title'>Hello { this.state.user.name }</h1>
        <h3 className='title'>Edit Account Info</h3>
        <AccountEditForm user={ this.state.user } />
      </div>
    )
  }
}

export default hot( module )( User );
