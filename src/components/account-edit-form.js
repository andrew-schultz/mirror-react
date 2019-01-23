import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './input.js';
import axios from 'axios';

class AccountEditForm extends Component {
  constructor( props ) {
    super( props );

    var user = this.props.user;

    this.state = {
      user: user,
      token: user.token,
      name: user.name,
      email: user.email,
      id: user.id,
      success: this.props.success || null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind( this );
    this.handleEmailChange = this.handleEmailChange.bind( this );
    this.handlePasswordChange = this.handlePasswordChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleChange( value ) {
    this.props.onUserChange( value );
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
      'id': this.state.id
    };

    axios.post( `http://localhost:3000/users/${ user.id }`,
      { user },
      { headers: { 'TOKEN': this.state.token } } )
      .then( result => {
        if ( result.status == 200 ) {
          var updatedUser = result.data.users[ 0 ];

          this.setState( {
            user: updatedUser,
            name: updatedUser.name,
            email: updatedUser.email,
            success: 'Successfully updated Account', } );

          this.handleChange( updatedUser );
        }
      }
    )
  }

  render() {
    const name = this.state.name;
    const email = this.state.email;

    return(
      <div>

        <form className='form' onSubmit={ this.handleSubmit }>
          <Input label='name' value={ name } onValueChange={ this.handleNameChange } />
          <Input label='email' value={ email } onValueChange={ this.handleEmailChange } />
          <input type='submit' value='Submit' />
        </form>
        <p className='successNotice'>{ this.state.success }</p>
      </div>
    );
  }
}

export default AccountEditForm;
