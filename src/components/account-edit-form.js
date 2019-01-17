import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './input.js';
import axios from 'axios';

class AccountEditForm extends Component {
  constructor( props ) {
    super( props );

    var user = this.props.user;

    this.state = {
      name: user.name,
      email: user.email,
      password: '*******',
      id: user.id,
      success: null
    };

    this.handleNameChange = this.handleNameChange.bind( this );
    this.handleEmailChange = this.handleEmailChange.bind( this );
    this.handlePasswordChange = this.handlePasswordChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleNameChange( value ) {
    this.setState( { name: value } )
  }

  handleEmailChange( value ) {
    this.setState( { email: value } )
  }

  handlePasswordChange( value ) {
    this.setState( { password: value } )
  }

  handleSubmit( event ) {
    event.preventDefault();

    const user = {
      'name': this.state.name,
      'email': this.state.email,
      'password': this.state.password,
      'id': this.state.id
    };

    axios.post( `http://localhost:3000/users/${ user.id }`, { user } )
      .then( result => {
        if ( result.status == 200 ) {
          this.setState( {
            success: 'Successfully updated Account',
            user: result.data.users[ 0 ] } );
        }
      }
    )
  }

  render() {
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;

    return(
      <div>
        <form className='form' onSubmit={ this.handleSubmit }>
          <Input label='name' value={ name } onValueChange={ this.handleNameChange } />
          <Input label='email' value={ email } onValueChange={ this.handleEmailChange } />
          <Input label='password' value={ password } onValueChange={ this.handlePasswordChange } />
          <input type='submit' value='Submit' />
        </form>
        <p>{ this.state.success }</p>
      </div>
    );
  }
}

export default AccountEditForm;
