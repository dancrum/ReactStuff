import React, { useEffect } from 'react';
import Classes from './main.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit] useEffect');
    });

    const classes = [];
    let btnClass = '';
    if(props.showPeople){ btnClass = Classes.red; }
    if(props.people.length <= 2) {
      classes.push(Classes.red);
    }

    if(props.people.length <= 1) { classes.push(Classes.bold); }
    return (
        <header className={Classes.cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button onClick={props.click} className={btnClass}>Toggle People</button>
        </header>
    );
};

export default cockpit;