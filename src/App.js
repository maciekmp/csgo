import React, { Component } from 'react';

import Team from './components/Team';
import Score from './components/Score';

import './App.css';

class App extends Component {
  state = {
    teams: true,
    score: true,
    data: [],
    fetched: false,
  }
  componentDidMount() {
    const url = 'https://randomuser.me/api/?results=5';
    Promise.all([
      fetch(url),
      fetch(url),
    ])
      .then((response) => {
        return Promise.all([
          response[0].json(),
          response[1].json(),
        ])
      })
      .then((data) => {
        this.setState({
          data,
          fetched: true,
        });
      });
  }
  onChangeInput = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: !this.state[name],
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container mb-5">
          <label>
            <input
              type="checkbox"
              name="teams"
              checked={this.state.teams}
              onChange={this.onChangeInput}
            />
            teams
          </label>
          <label>
            <input
              type="checkbox"
              name="score"
              checked={this.state.score}
              onChange={this.onChangeInput}
            />
            score
          </label>
        </div>
        <div className="container">
          {!this.state.fetched ?
            'loading...' :
            <div className="row">
              <aside className="col">
                {this.state.teams &&
                  <Team
                    team={this.state.data[0].results}
                  />
                }
              </aside>
              <main className="col-6">
                {this.state.score &&
                  <Score />
                }
              </main>
              <aside className="col">
                {this.state.teams &&
                  <Team
                    team={this.state.data[1].results}
                  />
                }
              </aside>
            </div>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
