import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './input.js';
import axios from 'axios';

class SignUpForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      name: '',
      email: '',
      password: '',
      success: false
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
      'password': this.state.password
    };

    axios.post( `http://localhost:3000/users`, { user } )
      .then( result => {
        if ( result.status == 200 ) {
          this.setState( { success: true, user: result.data.users[ 0 ] } );
        }
      } )
  }

  renderRedirect() {
    if ( this.state.success ) {
      return <Redirect to={{ pathname: '/user', state: { user: this.state.user } }} />
    }
  }

  render() {
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;

    return(
      <div>
        {this.renderRedirect()}

        <form className='form' onSubmit={ this.handleSubmit }>
          <Input label='Name' value={ name } onValueChange={ this.handleNameChange } />
          <Input label='Email' value={ email } onValueChange={ this.handleEmailChange } />
          <Input label='Password' value={ password } onValueChange={ this.handlePasswordChange } />
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignUpForm;
