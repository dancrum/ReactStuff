import React, { Component } from 'react';
import Classes from './Person.css';


class Person extends Component {
    render() {
        console.log('[Person] Rendering...');
        return (
            <div className={Classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.change} value={this.props.name} />
            </div>
        )
    }
};

export default Person;