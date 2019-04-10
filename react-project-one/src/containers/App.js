import React, { Component } from 'react';
import Classes from './App.css';
import People from '../components/People';
import Cockpit from '../components/cockpit';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Dan', age: 39 },
      { id: '2', name: 'Pauline', age: 29 },
      { id: '3', name: 'Shawn', age: 43 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
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
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons){
      persons = (
          <People 
            persons={this.state.persons}
            click={this.deletePersonHandler}
            change={this.nameChangeHandler} />
      );
      
    }

    

    return (
        <div className={Classes.App}>
          <Cockpit
            title={this.props.title}
            showPeople={this.state.showPersons} 
            people={this.state.persons} 
            click={this.personDisplayHandler} />
          {persons}
        </div>
    );
  }
}

export default App;
