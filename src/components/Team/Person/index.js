import React from 'react';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Person = (props) => {
  const hp = getRandomInt(0, 100);
  return (
    <li>
      {`${props.person.login.username}`}
      <span>{hp > 0 ? 'alive' : 'dead'}</span>
      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: `${hp}%`,
          }}
        />
      </div>
    </li>
  )
};

export default Person;