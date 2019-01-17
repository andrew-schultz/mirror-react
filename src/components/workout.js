import React, { Component } from 'react';

class WorkoutDiv extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    const workout = this.props.workout;
    const exercises = this.props.workout.exercises;

    return(
      <div className='workoutDiv'>
        <h3 className='workoutTitle'>{ this.props.workout.name }</h3>
        <ul className='workoutList'>
          { exercises.map( exercise =>
            <li key={ exercise.id }>
              { exercise.name }
            </li>
          ) }
        </ul>
      </div>
    );
  }
}

export default WorkoutDiv;
