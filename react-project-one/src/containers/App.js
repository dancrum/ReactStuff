import React, { Component } from 'react';
import Classes from './App.css';
import People from '../components/People';
import Cockpit from '../components/cockpit';
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';


class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Dan', age: 39 },
      { id: '2', name: 'Pauline', age: 29 },
      { id: '3', name: 'Shawn', age: 43 }
    ],
    showPersons: false,
    authenticated: false
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  }

  render() {
    let persons = null;

    if(this.state.showPersons){
      persons = (
          <People 
            persons={this.state.persons}
            click={this.deletePersonHandler}
            change={this.nameChangeHandler}
            isAuthenticated={this.state.authenticated} />
      );
      
    }

    return (
        <WithClass classes={Classes.App}>
          <AuthContext.Provider value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler
            }}>
            <Cockpit
              title={this.props.title}
              showPeople={this.state.showPersons} 
              people={this.state.persons} 
              peopleLength={this.state.persons.length}
              click={this.personDisplayHandler} />
            {persons}
          </AuthContext.Provider>
        </WithClass>
    );
  }
}

export default App;
