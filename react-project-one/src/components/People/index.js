import React from 'react';
import Person from './Person/Person.js'

class People extends React.Component {

    shouldComponentUpdate(nextProps, nextState){
        console.log('[People] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(){
        console.log('[People] componentDidUpdate');
    }

    render() {
        console.log('[People] Rendering...');
        return this.props.persons.map((person, index) => {
            return <Person 
            key={person.id} 
            click={() => this.props.click(index)} 
            name={person.name} 
            age={person.age}
            change={(event) => this.props.change(event, person.id)} />
        });
    }
}

export default People;