import React from 'react';

const ClearButton = props => {
    
    const handleClick = (event) => {
        event.preventDefault();
        console.log('clear from ClearButton.js');
    }

    return <button id={props.id} className={props.className} onClick={handleClick}>{props.text}</button>;
}

export default ClearButton;
