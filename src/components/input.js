import React, { Component } from 'react';

class Input extends Component {
  constructor( props ) {
    super( props );
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange( event ) {
    this.props.onValueChange( event.target.value );
  }

  render() {
    const value = this.props.value;
    return(
      <label>
        { this.props.label }:
        <input type="text" value={ this.props.value } onChange={ this.handleChange } />
      </label>
    );
  }
}

export default Input;
