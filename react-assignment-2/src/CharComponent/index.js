import React from 'react';
import './CC.css';

const Chars = (props) => {

    return <p className='char' onClick={props.click}>{props.char}</p>
}

export default Chars;

