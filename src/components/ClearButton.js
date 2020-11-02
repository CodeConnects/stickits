import React from 'react';

const ClearButton = props => {
    
    const handleClick = (event) => {
        event.preventDefault();
        alert('clear');
    }

    return <button id={props.id} className={props.className} onClick={handleClick}>{props.text}</button>;
}

export default ClearButton;
