import React from 'react';

const ValidationComponent = (props) => {
    let validLen = 'Text long enough';
    if(props.count < 5) {
        validLen = 'Text too short';
    }

    return (
        <p>{validLen}</p>
    )
}

export default ValidationComponent;