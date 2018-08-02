import React from 'react';

import Person from './Person';

const Team = (props) => (
  <ul>
    {props.team.map((person) => (
      <Person
        key={person.id.value}
        person={person}
      />
    ))}
  </ul>
);

export default Team;