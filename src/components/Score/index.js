import React from 'react';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Score = () => (
  <div className="row text-center">
    <div className="col">
      <div className="team">
        <h3>
          Fnatic
      </h3>
        <div className="score">
          {getRandomInt(0, 20)}
        </div>
      </div>
    </div>
    <div className="col">
      <div className="map">
        de_train
    </div>
      <div className="clock">
        20:00
    </div>
    </div>
    <div className="col">
      <div className="team">
        <h3>
          Astralis
      </h3>
        <div className="score">
          {getRandomInt(0, 20)}
      </div>
      </div>
    </div>
  </div>
);

export default Score;
