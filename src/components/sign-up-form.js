import React, { Component } from 'react';
import Input from './input.js';
import axios from 'axios';

class SignUpForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      name: '',
      email: '',
      password: ''
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

    var json_user = JSON.stringify( user );

    axios.post( `http://localhost:3000/users`, {user } )
      .then( res => {
        console.log(res);
        console.log(res.data);
      } )
  }

  render() {
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;

    return(
      <form onSubmit={ this.handleSubmit }>
        <Input label='name' value={ name } onValueChange={ this.handleNameChange } />
        <Input label='email' value={ email } onValueChange={ this.handleEmailChange } />
        <Input label='password' value={ password } onValueChange={ this.handlePasswordChange } />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignUpForm;
