import React, { Component } from 'react';
import Classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
	constructor(props){
		super(props);
		this.inputElement = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount(){
		this.inputElement.current.focus();
		console.log(this.context.authenticated);
	}
	componentDidUpdate(){
		console.log(this.context.authenticated);
	}

	render() {
		return (
			<WithClass classes={Classes.Person}>
				{this.context.authenticated ? <p>Authenticated!</p>:<p>Please Log In</p>}
				<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}!</p>
				<p>{this.props.children}</p>
				<input 
					type='text' 
					ref={this.inputElement}
					onChange={this.props.change} 
					value={this.props.name} />
			</WithClass>
		)
	}
};

export default Person;