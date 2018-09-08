import React from 'react';
import Person from '../Persons/Person/Person';
import ErrorBoundery from '../ErrorBoundery/ErrorBoundery'

const persons = (props) => (
    props.persons.map((person, index) => {
        const hexColor = props.randomColor();
        return <ErrorBoundery key={person.id}><Person
          color={hexColor}
          click={() => props.clicked(index)}
          name={person.name}
          age={person.age} />
        </ErrorBoundery>
      })
);

export default persons;