import React from 'react';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Score extends React.PureComponent {
  state = {
    time: 20 * 60,
    team1: getRandomInt(0, 20),
    team2: getRandomInt(0, 20),
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      const time = this.state.time - 1;
      if (time < 0) {
        return false;
      }
      this.setState({
        time,
      });
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  getTime() {
    const minutes = Math.floor(this.state.time / 60);
    const seconds = (this.state.time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  render() {
    return (
      <div className="row text-center">
        <div className="col">
          <div className="team">
            <h3>
              Fnatic
            </h3>
            <div className="score">
              {this.state.team1}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="map">
            de_train
          </div>
          <div className="clock">
            {this.getTime()}
          </div>
        </div>
        <div className="col">
          <div className="team">
            <h3>
              Astralis
            </h3>
            <div className="score">
              {this.state.team2}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
