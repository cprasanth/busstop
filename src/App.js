import React, { Component } from 'react';
import './App.css';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <h1>{this.props.stop.name}</h1>
        {this.props.stop.departures.all.map(
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
  getBuses = (stopId) => {
    fetch('https://transportapi.com/v3/uk/bus/stop/'+stopId+'/live.json?app_id=f450d440&app_key=e83553eadb7281bd5539e75836263907&group=no&nextbuses=yes')
      .then(
        results => {
          return results.json();
        })
      .then(data => {
        this.setState(
          { stopArray: [...this.state.stopArray, data] }
        )
      });
  };
  componentDidMount() {
    this.getBuses('0170SGP90695');
    this.getBuses('0170SGP90846');
    this.getBuses('0170SGP90887');
    this.getBuses('0170SGP90871');    
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
