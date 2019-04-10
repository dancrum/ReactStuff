import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Dan', age: 39 },
      { id: '2', name: 'Pauline', age: 29 },
      { id: '3', name: 'Shawn', age: 43 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  personDisplayHandler = () => {
    //this.state.showPersons ? this.setState({showPersons: false }) : this.setState({ showPersons: true})
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      boxShadow: '0 4px 0 #006700',
      font: 'inherit',
      border: 'none',
      padding: '8px',
      borderRadius: '5px',
      color: 'white',
      cursor: 'pointer',
      outline: 'none',
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id} 
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              change={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style.boxShadow = '0 4px 0 #bb0606';
    }

    const classes = [];
    
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) { classes.push('bold'); }

    return (
        <div className="App">
          <h1>Dan rules</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button onClick={this.personDisplayHandler} style={style}>Toggle People</button>
          {persons}
        </div>
    );
  }
}

export default App;
