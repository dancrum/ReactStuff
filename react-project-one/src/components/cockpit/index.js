import React, { useRef } from 'react';
import Classes from './main.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);
    const authContext = React.useContext(AuthContext);

    React.useEffect(() => {
        toggleButtonRef.current.click();
    }, []);

    const classes = [];
    let btnClass = '';
    if(props.showPeople){ btnClass = Classes.red; }
    if(props.peopleLength <= 2) {
      classes.push(Classes.red);
    }

    if(props.peopleLength <= 1) { classes.push(Classes.bold); }
    return (
        <header className={Classes.cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button ref={toggleButtonRef} onClick={props.click} className={btnClass}>Toggle People</button>
            <button onClick={authContext.login}>Login</button>}
        </header>
    );
};

export default React.memo(cockpit);