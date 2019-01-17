import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './input.js';
import axios from 'axios';
import Exercises from './exercises.js';

class WorkoutForm extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      user: this.props.user,
      user_id: this.props.user.id,
      workout_name: '',
      workout_exercises: [],
      success: false
    }

    this.handleNameChange = this.handleNameChange.bind( this );
    this.handleExerciseChange = this.handleExerciseChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleNameChange( value ) {
    this.setState( { workout_name: value } )
  }

  handleExerciseChange( value ) {
    var exercises = this.state.workout_exercises;
    var index = exercises.indexOf( value );

    if ( index > -1 ) {
      exercises.splice( index, 1 );
    } else {
      exercises.push( value );
    }

    this.setState( { workout_exercises: exercises } );
  }

  handleSubmit( event ) {
    event.preventDefault();

    const workout = {
      name: this.state.workout_name,
      user_id: this.state.user_id,
      exercises: this.state.workout_exercises
    };

    axios.post( `http://localhost:3000/workouts`, { workout } )
      .then( result => {
        if ( result.status == 200 ) {
          this.setState( {
            success: 'Successfully created Workout',
            workout: result.data.workouts[ 0 ] } );
        }
      }
    )
  }

  renderRedirect() {
    if ( this.state.success ) {
      return <Redirect to={{ pathname: '/workouts', state: { user: this.state.user } }} />
    }
  }

  render() {
    const name = this.state.workout_name;
    const exercises = this.state.workout_exercises;

    return(
      <div>
        {this.renderRedirect()}

        <form className='form' onSubmit={ this.handleSubmit }>
          <Input label='Name' value={ name } onValueChange={ this.handleNameChange } />
          <label>
            Exercises:
            <Exercises value={ exercises } onValueChange={ this.handleExerciseChange } />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <p>{ this.state.success }</p>
      </div>
    )
  }
}

export default WorkoutForm;
