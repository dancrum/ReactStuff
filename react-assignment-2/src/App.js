import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import Chars from './CharComponent';

class App extends Component {
  state = {
    word: ''
  }

  letterCountHandler = (event) => {
    const word = event.target.value;
    this.setState({word: word});
  };

  deleteCharHandler = (index) => {
    const chars = [...this.state.word.split('')];
    chars.splice(index, 1);
    this.setState({word: chars.join('')});
  }

  render() {
    const charList = this.state.word.split('').map((ch, index) => {
      return <Chars char={ch} key={index} click={() => this.deleteCharHandler(index)} />
    })
    return (
      <div className="App">
        <input type='text' onChange={(event) => this.letterCountHandler(event)} value={this.state.word} />
        <p>{this.state.word}<br />Letters: {this.state.word.length}</p>
        <ValidationComponent count={this.state.word.length} />
        {charList}
      </div>
    );
  }
}

export default App;
