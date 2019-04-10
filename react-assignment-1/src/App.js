import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      {username: 'thelivingrobot'}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      users: [
        {username: event.target.value}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'rgb(145,25,31)',
      padding: '25px 0'
    }
    return (
      <div className="App" style={style}>
        <UserInput change={this.nameChangeHandler} username={this.state.users[0].username} />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[0].username} />
        <UserOutput username={this.state.users[0].username} />
      </div>
    );
  }
}

export default App;
