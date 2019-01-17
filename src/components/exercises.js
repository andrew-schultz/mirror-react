import React, { Component } from 'react';
import axios from 'axios';

class Exercises extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      exercises: []
    };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( event ) {
    this.props.onValueChange( event.target.value );
  }

  componentDidMount() {
    axios.get( `http://localhost:3000/exercises` )
      .then( result => {
        if ( result.status == 200 ) {
          const exercises = result.data.exercises
          this.setState( { exercises } );
        }
      }
    )
  }

  render() {
    const value = this.props.value;

    return(
      <div>
        <ul className='exerciseList'>
          { this.state.exercises.map( exercise =>
            <li key={ exercise.id }>
              <label>
                { exercise.name }:
                <input type='checkbox' value={ exercise.id } onChange={ this.handleChange } />
              </label>
            </li>
          ) }
        </ul>
      </div>
    );
  }
}

export default Exercises;
