import React, { Component } from 'react';
import './App.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopName: this.props.stop.name,
      departures: this.props.stop.departures.all
    }
  };
  render() {
    return (
      <div className="board">
        <h1>{this.state.stopName}</h1>
        {this.state.departures.map(
          (name, i) => {
            return (
              <div key={i}>
                <span className='aim-time'>{name.aimed_departure_time}</span>
                <span className='best-time'> ({name.best_departure_estimate}) - </span>
                <span className='line-name'>{name.line_name}</span>
              </div>
            )
          }
        )}
      </div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopArray: []
    };
  }
  componentDidMount() {
    fetch('https://transportapi.com/v3/uk/bus/stop/0170SGP90695/live.json?app_id=f450d440&app_key=e83553eadb7281bd5539e75836263907&group=no&nextbuses=yes')
      .then(
        results => {
          return results.json();
        })
      .then(data => {
        this.setState(
          { stopArray: [...this.state.stopArray, data] }
        )
      });
      fetch('https://transportapi.com/v3/uk/bus/stop/0170SGP90846/live.json?app_id=f450d440&app_key=e83553eadb7281bd5539e75836263907&group=no&nextbuses=yes')
      .then(
        results => {
          return results.json();
        })
      .then(data => {
        this.setState(
          { stopArray: [...this.state.stopArray, data] }
        )
      });
      fetch('https://transportapi.com/v3/uk/bus/stop/0170SGP90887/live.json?app_id=f450d440&app_key=e83553eadb7281bd5539e75836263907&group=no&nextbuses=yes')
      .then(
        results => {
          return results.json();
        })
      .then(data => {
        this.setState(
          { stopArray: [...this.state.stopArray, data] }
        )
      });
      fetch('https://transportapi.com/v3/uk/bus/stop/0170SGP90871/live.json?app_id=f450d440&app_key=e83553eadb7281bd5539e75836263907&group=no&nextbuses=yes')
      .then(
        results => {
          return results.json();
        })
      .then(data => {
        this.setState(
          { stopArray: [...this.state.stopArray, data] }
        )
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.stopArray.map(
          (name, i) => {
            return (
              <Board key={i} stop={name} />
            )
          }
        )}
      </div>
    );
  }
}

export default App;
